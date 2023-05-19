import { Box, Button, Typography } from '@mui/material';
import { gothamFont } from '../../helpers/gothamFont';
import { scrollToTable } from '../../helpers/scrollToTable';

const Banner = () => {
  return (
    <Box className="banner-wrapper">
      <Box className="banner-inside">
        <Box className="banner">
          <Box className="banner__left">
            <p className={gothamFont.className} id="breadcrumbs">
              <span>Home</span> {'>'} <span>Code + frameworks</span> {'>'} Open
              APIs
            </p>
            <h1 className={gothamFont.className}>
              <span style={{ color: '#266ed9' }}>Open</span> API Table
            </h1>
            <h2 className={gothamFont.className}>
              60+ Open APIs tried, tested and de-risked.
            </h2>
            <Button
              variant="contained"
              sx={{
                width: '150px',
                backgroundColor: '#3577DA',
                textTransform: 'capitalize',
                borderRadius: '10px 0px',
              }}
              onClick={scrollToTable}
            >
              <span className={gothamFont.className}>View table</span>
            </Button>
          </Box>
        </Box>
        <Box className="banner__right" />
      </Box>
    </Box>
  );
};

export default Banner;
