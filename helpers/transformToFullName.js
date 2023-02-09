export const transformToFullName = (word) => {
  switch (word) {
    case 'conformance':
      return 'Conformance Profile (RAND)';
    case 'ctk':
      return 'CTK';
    case 'postman':
      return 'Postman Collection';
    case 'user_guides':
      return 'API User Guides Specification (RAND)';
    case 'ri':
      return 'Sample Implementation Code';
    default:
      return word;
  }
};
