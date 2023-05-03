export const transformToFullName = (word) => {
  switch (word) {
    case 'conformance':
      return 'Conformance profile (RAND)';
    case 'ctk':
      return 'CTK';
    case 'postman':
      return 'Postman collection';
    case 'user_guides':
      return 'API user guides specification (RAND)';
    case 'ri':
      return 'Sample implementation code';
    default:
      return word;
  }
};
