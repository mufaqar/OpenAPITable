import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <Box className="bannerWrapper">
      <Box className="banner">
        <Box className="banner__left">
          <Typography variant="h6">
            Home {'>'} Code + framework {'>'} Open APIs
          </Typography>
          <Typography variant="h2">
            <span>Open</span> API Table
          </Typography>
          <Typography variant="h5">
            60+ REST-based Open Apis tried, tested and de-risked
          </Typography>
          <Button variant="contained" sx={{ width: '150px' }}>
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
