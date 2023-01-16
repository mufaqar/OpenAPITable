export const removeHtmlTags = (string) => {
  if (!string) return;
  return string.replace(/(<([^>]+)>)/gi, '');
};
