export const getApiDataUrl = (): string => {
  const API_PATH = process.env.NEXT_PUBLIC_API_PATH || "/api";
  return process.env.NEXT_PUBLIC_API_HOST + API_PATH;
};

export const getInformDataApiUrl = (): string => {
  const API_PATH = process.env.NEXT_PUBLIC_API_INFORM_PATH || "/api/graphql/";
  return process.env.NEXT_PUBLIC_API_INFORM_HOST + API_PATH;
};
