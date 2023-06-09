import { Box, Button } from '@mui/material';
import { gothamFont } from '../../helpers/gothamFont';
import { scrollToTable } from '../../helpers/scrollToTable';
import Link from 'next/link';

const Banner = () => {
  return (
    <Box className="banner-wrapper">
      <Box className="banner-inside">
        <Box className="banner">
          <Box className="banner__left">
            <p className={gothamFont.className} id="breadcrumbs">
              <Link
                href={'https://' + process.env.NEXT_PUBLIC_HOST_DOMAIN || ''}
              >
                <span>Home</span>{' '}
              </Link>{' '}
              {'>'}{' '}
              <Link
                href={
                  'https://' + process.env.NEXT_PUBLIC_HOST_DOMAIN + '/oda/' ||
                  ''
                }
              >
                <span>Open Digital Architecture</span>
              </Link>{' '}
              {'> '}
              <Link
                href={
                  'https://' +
                    process.env.NEXT_PUBLIC_HOST_DOMAIN +
                    '/oda/open-apis/' || ''
                }
              >
                <span>Open APIs</span>
              </Link>
              {'> '}API table
            </p>
            <Box>
              <h3 className={gothamFont.className}>
                Open Digital Architecture
              </h3>
              <h1 className={gothamFont.className}>
                <span style={{ color: '#266ed9' }}>Open</span> API table
              </h1>
            </Box>
            <h2 className={gothamFont.className}>
              60+ Open APIs tried, tested and de-risked.
            </h2>
            <Button
              variant="contained"
              sx={{
                width: '150px',
                backgroundColor: '#3577DA',
                borderRadius: '10px 0px',
                textTransform: 'none',
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
