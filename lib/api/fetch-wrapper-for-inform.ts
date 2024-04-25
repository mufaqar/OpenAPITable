import { QueryParams } from "../types/declarations";

type QueryPayload = {
  query: string;
  variables?: { [key: string]: string | number };
};

export const fetchWrapperForInform = async <T, K = QueryParams>(
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
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(queryPayload),
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
    return result.data;
  } catch (err) {
    console.error(err);
    return undefined as T;
  }
};
