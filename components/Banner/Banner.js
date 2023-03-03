import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { gothamFont } from '../../helpers/gothamFont';
import { scrollToTable } from '../../helpers/scrollToTable';

const Banner = () => {
  return (
    <Box sx={{ backgroundColor: '#102338', height: '570px' }}>
      <Box sx={{ display: 'flex', gap: '100px' }}>
        <Box
          sx={{
            backgroundColor: '#102338',
            flex: 0.5,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Box className="banner__left">
            <Typography variant="h6">
              Home {'>'} Code + framework {'>'} Open APIs
            </Typography>
            <Typography
              className={gothamFont.className}
              sx={{
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '64px',
                lineHeight: '108%',
              }}
            >
              <span>Open</span> API Table
            </Typography>
            <Typography
              className={gothamFont.className}
              sx={{
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '24px',
                lineHeight: '150%',
              }}
            >
              60+ REST-based Open Apis tried, tested and de-risked
            </Typography>
            <Button
              variant="contained"
              sx={{ width: '150px' }}
              onClick={scrollToTable}
            >
              View Table
            </Button>
          </Box>
        </Box>
        <Box
          className="banner__right"
          sx={{ backgroundColor: '#102338', flex: 0.5, height: '425px' }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Banner;

{
  /* <Box className="banner__left">
<Typography variant="h6">
  Home {'>'} Code + framework {'>'} Open APIs
</Typography>
<Typography
  className={gothamFont.className}
  sx={{
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '64px',
    lineHeight: '108%',
  }}
>
  <span>Open</span> API Table
</Typography>
<Typography
  className={gothamFont.className}
  sx={{
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '24px',
    lineHeight: '150%',
  }}
>
  60+ REST-based Open Apis tried, tested and de-risked
</Typography>
<Button
  variant="contained"
  sx={{ width: '150px' }}
  onClick={scrollToTable}
>
  View Table
</Button>
</Box> */
}
