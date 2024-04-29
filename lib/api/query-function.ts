import qs from "qs";
import { getApiDataUrl } from "../utils";

export async function fetchDataWithQS<T, K = any>(
  endpoint: string,
  queryParams?: Record<string, any>,
  overriddenParams?: Record<string, any>,
) {
  var fetchOptions
  overriddenParams?.method === 'GET' ?
    fetchOptions = {
      method: 'GET'
    } :
    fetchOptions = {
      method: 'POST',
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

  const baseUrl = getApiDataUrl();

  const queryString = queryParams ? `?${qs.stringify(queryParams)}` : "";

  const url = `${baseUrl}/${endpoint}${queryString}`;

  console.log({ url });

  // const mergedOptions = overriddenParams
  //   ? { ...fetchOptions, ...overriddenParams }
  //   : fetchOptions;

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
}
