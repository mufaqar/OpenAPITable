import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import { API_TABLE } from '../../API_TABLE';
import { transformToValues } from '../../helpers/transformToValues';

const DocumentNumber = () => {
  const {
    query: { documentNumber },
  } = useRouter();

  const data = transformToValues(API_TABLE);

  const apiDetails = Object.values(data).reduce((acc, curr) => {
    curr.forEach((item) => {
      if (item?.documentNumber === documentNumber) {
        return Object.assign(acc, item);
      }
    });
    return acc;
  }, {});

  return (
    <>
      <Box className="documentNumber">
        <Box className="documentNumber__first">
          <Box className="documentNumber__first__inside">
            <Typography variant="h1" component="h1" sx={{ color: 'white' }}>
              {documentNumber}
            </Typography>
          </Box>
        </Box>
        <Box className="documentNumber__secound">
          <Box className="documentNumber__secound__inside">
            <Box className="documentNumber__secound__inside__left">
              <Typography> Block Name: {apiDetails.key}</Typography>
              <Typography>
                {' '}
                Document Number: {apiDetails.documentNumber}
              </Typography>
              <Typography> Api Name: {apiDetails.apiName}</Typography>
              <Typography> Version Info: {apiDetails.versionInfo}</Typography>
              <Typography> Release Info: {apiDetails.releaseInfo}</Typography>
            </Box>
            <Box className="documentNumber__secound__inside__right">
              <Typography>Api description</Typography>
              <Typography>{apiDetails.apiDescription}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DocumentNumber;
