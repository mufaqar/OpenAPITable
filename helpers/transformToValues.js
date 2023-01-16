import { removeHtmlTags } from './removeHtmlTags';

export const transformToValues = (data) => {
  return Object.values(data)
    .map(([currElement]) => {
      const elementKey = currElement.context.split(',')[0];
      const { document_number, version_info, release_info } = currElement;
      const {
        api_description: { api_name, api_description },
      } = currElement;

      return {
        apiName: api_name,
        apiDescription: removeHtmlTags(api_description),
        key: elementKey,
        documentNumber: document_number,
        versionInfo: version_info,
        releaseInfo: release_info,
      };
    })
    .reduce((prev, curr) => {
      const { key } = curr;
      prev[key] = prev[key] || [];
      prev[key].push(curr);
      return prev;
    }, []);
};
