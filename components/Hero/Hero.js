import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

const Hero = () => {
  return (
    <Box className="heroWrapper">
      <Box className="hero__left">
        <Typography variant="h3" sx={{ color: '#1A2746' }}>
          Open API Table
        </Typography>
        <Typography variant="h6">
          This table contains the latest Production versions of the Open APIs,
          for which TM Forum provides conformance certification. For APIs in
          early adoption or still in development please click here. For previous
          versions which are no longer supported please click here.
        </Typography>
        <Typography variant="h6">
          If you have any questions regarding the content of the Open API Table
          please post them as discussion topics on the Open API Community Forum.
        </Typography>
      </Box>
      <Box className="hero__right">
        <Box className="hero__right__inside">
          <Typography variant="h6" sx={{ color: 'red' }}>
            Appears in the following playbooks
          </Typography>
          <Box className="hero__right__inside__middle">
            <Typography variant="h6">
              How can I get my product to be conformant against TM Forum Open
              APIs?
            </Typography>
            <LaunchIcon />
          </Box>
          <Button>View More</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
