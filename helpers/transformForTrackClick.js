export const transformForTrackClick = (word) => {
  switch (word) {
    case 'conformance':
      return 'CTK-Conformance';
    case 'ctk':
      return 'CTK';
    case 'postman':
      return 'Postman';
    case 'user_guides':
      return 'Specification PDF';
    case 'ri':
      return 'RI';
    case 'swagger':
      return 'Swagger';
    default:
      return word;
  }
};
