import { getApiDataUrl } from "../utils";
import { fetchWrapper } from "./fetch-wrapper";

export function getQueryFunction<T>(
  url: string,
  queryDoc?: any,
  queryParams?: any,
) {
  const apiUrl = getApiDataUrl();
  return fetchWrapper<T>(apiUrl + url, queryDoc, queryParams);
}
