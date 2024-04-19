export type AssetTypeEnum =
  | "swagger"
  | "checkmark"
  | "user"
  | "postman"
  | "menu"
  | "code";

export type AssetListType = {
  title: string;
  type: AssetTypeEnum;
  url: string;
};

