import qs from "qs";

export async function fetchDataWithQSCatalystApi<T, K = any>(
  endpoint: string,
  queryParams?: Record<string, any>,
  overriddenParams?: Record<string, any>,
) {
  const fetchOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_CATALYST_BEARER_TOKEN}`,
    },
    next: {
      revalidate: Number(
        process.env.NEXT_PUBLIC_REVALIDATE_TIME_IN_SECONDS || 10,
      ),
    },
  };

  const queryString = queryParams ? `?${qs.stringify(queryParams)}` : "";

  const url = `${process.env.NEXT_PUBLIC_API_CATALYST_HOST}/${endpoint}${queryString}`;

  const mergedOptions = overriddenParams
    ? { ...fetchOptions, ...overriddenParams }
    : fetchOptions;

  try {
    const response = await fetch(url, mergedOptions);

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
}
