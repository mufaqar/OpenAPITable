export const searchTable = (data, query) => {
  const keys = ['api_name', 'document_number', 'context'];
  return data.filter((item) =>
    keys.some((key) => item[key].toLowerCase().includes(query.toLowerCase()))
  );
};
