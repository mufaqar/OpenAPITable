import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';

const DocumentNumber = () => {
  const {
    query: { documentNumber },
  } = useRouter();

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
              <Typography variant="h1" component="h1">
                {documentNumber}
              </Typography>
            </Box>
            <Box className="documentNumber__secound__inside__right">
              <Typography>Api description</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas facilisis sapien nisi, non mattis purus consequat eu.
                Pellentesque lacinia massa eu erat feugiat suscipit. Aenean
                porttitor. Consectetur adipiscing elit. Maecenas facilisis
                sapien nisi, non mattis purus consequat eu. Pellentesque lacinia
                massa eu erat feugiat suscipit. Aenean porttitor. consectetur
                adipiscing elit. Maecenas facilisis sapien nisi, non mattis
                purus consequat eu. Pellentesque lacinia massa eu erat feugiat
                suscipit. Aenean porttitor. Non mattis purus consequat eu.
                Pellentesque lacinia massa eu erat feugiat suscipit. Aenean
                porttitor. Purus consequat eu. Pellentesque lacinia massa eu
                erat feugiat suscipit. Aenean porttitor.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DocumentNumber;
