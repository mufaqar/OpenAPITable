import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

const Hero = () => {
  return (
    <Box className="heroWrapper">
      <Box className="hero__left">
        <Box
          className="hero__right__inside"
          sx={{ backgroundColor: 'white !important' }}
        >
          <Typography variant="h6">
            ODA Function Block: Party Management
          </Typography>
          <Typography variant="h6">
            Component name: Billing Inquiries Management
          </Typography>
          <Typography variant="h6">Component ID: TMFC025</Typography>
          <Typography variant="h6">Component version:</Typography>
          <Typography variant="h6">
            Component Specification status: Future
          </Typography>
          <Typography variant="h6">Published date: None</Typography>
        </Box>
      </Box>
      <Box className="hero__right">
        <Typography
          variant="h3"
          sx={{ color: '#1A2746', marginBottom: '2rem' }}
        >
          API Description:
        </Typography>
        <Typography variant="h6">
          This table contains the latest Production versions of the Open APIs,
          for which TM Forum provides conformance certification. For APIs in
          early adoption or still in development please click here. For previous
          versions which are no longer supported please click here.
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
