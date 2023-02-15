import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { gothamFont } from '../../helpers/gothamFont';
import { scrollToTable } from '../../helpers/scrollToTable';

const Banner = () => {
  return (
    <Box className="bannerWrapper">
      <Box className="banner">
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
        <Box className="banner__right">
          <Box sx={{ height: '100%', width: '100%', position: 'relative' }}>
            <Image
              src="/images/tmf-hexogen-bg-1.svg"
              alt=""
              fill
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
