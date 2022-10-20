import { removeHtmlTags } from './removeHtmlTags';

export const transformToValues = (data) => {
  return Object.values(data)
    .map(([currElement]) => {
      const elementKey = currElement.context.split(',')[0];
      const { document_number } = currElement;
      const {
        api_description: { api_name, api_description },
      } = currElement;

      return {
        apiName: `${document_number} ${api_name}`,
        apiDescription: removeHtmlTags(api_description),
        key: elementKey,
        document_number,
      };
    })
    .reduce((prev, curr) => {
      const { key } = curr;
      prev[key] = prev[key] || [];
      prev[key].push(curr);
      return prev;
    }, []);
};
