export const removeHtmlTags = (string) => {
  return string.replace(/(<([^>]+)>)/gi, '');
};
