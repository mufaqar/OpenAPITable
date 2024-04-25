import { getInformDataApiUrl } from "../utils";
import { fetchWrapperForInform } from "./fetch-wrapper-for-inform";

export function getQueryFunctionForInform<T>(
  queryDoc?: any,
  queryParams?: any,
) {
  const apiUrl = getInformDataApiUrl();
  return fetchWrapperForInform<T>(apiUrl, queryDoc, queryParams);
}
