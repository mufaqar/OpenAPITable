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

  console.log(apiDetails);

  return (
    <>
      <Box className="documentNumber">
        <Box className="documentNumber__first">
          <Box className="documentNumber__first__inside">
            <Typography
              variant="h2"
              sx={{ color: 'white', textAlign: 'center', letterSpacing: 2 }}
            >
              {documentNumber} {apiDetails?.apiName}
            </Typography>
          </Box>
        </Box>
        <Box className="documentNumber__secound">
          <Box className="documentNumber__secound__inside">
            <Box className="documentNumber__secound__inside__left">
              <Typography sx={{ marginBottom: '1.6rem' }} variant="h4">
                Api Details
              </Typography>
              <Typography>
                <b>Block Name:</b> {apiDetails.key}
              </Typography>
              <Typography>
                <b>Document Number:</b> {apiDetails.documentNumber}
              </Typography>
              <Typography>
                <b>Api Name:</b> {apiDetails.apiName}
              </Typography>
              <Typography>
                <b>Version Info:</b> {apiDetails.versionInfo}
              </Typography>
              <Typography>
                <b>Release Info:</b> {apiDetails.releaseInfo}
              </Typography>
            </Box>
            <Box className="documentNumber__secound__inside__right">
              <Typography variant="h4">Api description</Typography>
              <Typography>{apiDetails.apiDescription}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DocumentNumber;
