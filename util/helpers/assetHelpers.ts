import { AssetTypeEnum } from "../types";

export const getAssetIcon = (asset: AssetTypeEnum) => {
  const assetBasePath = "/oda/open-apis/icons/";

  switch (asset) {
    case "swagger":
      return `${assetBasePath}swagger-icon.svg`;
    case "checkmark":
      return `${assetBasePath}check-square-icon.svg`;
    case "user":
      return `${assetBasePath}user-icon.svg`;
    case "postman":
      return `${assetBasePath}postman-icon.svg`;
    case "menu":
      return `${assetBasePath}menu-alt-icon.svg`;
    case "code":
      return `${assetBasePath}code-icon.svg`;

    default:
      return ``;
  }
};

export const getAssetColor = (asset: AssetTypeEnum) => {
  switch (asset) {
    case "swagger":
      return "bg-pillar-labs";
    case "checkmark":
      return "bg-core-lightBlue";
    case "user":
      return "bg-core-blue";
    case "postman":
      return "bg-pillar-training";
    case "menu":
      return "bg-pillar-frameworks";
    case "code":
      return "bg-pillar-knowledge";

    default:
      return ``;
  }
};

export const getAssetFileType = (asset: AssetTypeEnum) => {
  switch (asset) {
    case "swagger":
      return "view";
    case "checkmark":
      return "download";
    case "user":
      return "view";
    case "postman":
      return "download";
    case "menu":
      return "view";
    case "code":
      return "download";

    default:
      return ``;
  }
};
