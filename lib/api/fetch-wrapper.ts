type QueryPayload = {
  query: string;
  variables?: { [key: string]: string | number };
};

// @FIXME: make the result of the function generic
export const fetchWrapper = async <T, K = any>(
  url: string,
  query: string,
  queryParams?: K,
): Promise<T> => {
  const queryPayload: QueryPayload = {
    query: query,
  };

  if (queryParams) {
    queryPayload["variables"] = queryParams;
  }

  const fetchOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_APP_STRAPI_BEARER_TOKEN}`,
    },
    next: {
      revalidate: Number(
        process.env.NEXT_PUBLIC_REVALIDATE_TIME_IN_SECONDS || 10,
      ),
    },
  };

  try {
    const response = await fetch(url, fetchOptions);
    if (response.status !== 200) {
      // @FIXME: need to add a generic result for objects too
      return undefined as T;
    }
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
    return undefined as T;
  }
};
