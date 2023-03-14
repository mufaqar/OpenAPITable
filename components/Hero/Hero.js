import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import { gothamFont } from '../../helpers/gothamFont';
import Link from 'next/link';

const Hero = () => {
  return (
    <Box className="heroWrapper">
      <Box className="hero__left">
        <Typography
          className={gothamFont.className}
          sx={{
            color: '#1A2746',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '24px',
          }}
        >
          Open API Table
        </Typography>
        <Typography className={gothamFont.className} sx={{}} variant="h6">
          This table contains the latest Production versions of the{' '}
          <span style={{ color: '#266ED9', fontWeight: 600 }}>Open APIs</span>,
          for which TM Forum provides{' '}
          <Link
            href="https://www.tmforum.org/conformance-certification/open-api-conformance/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span style={{ color: '#266ED9', fontWeight: 600 }}>
              conformance certification
            </span>
          </Link>
          . For APIs in early adoption or still in development please click{' '}
          <Link href="/pre-production">
            <span style={{ color: '#266ED9', fontWeight: 600 }}>here</span>
          </Link>
          . For previous versions which are no longer supported please click{' '}
          <Link href="/historic">
            <span style={{ color: '#266ED9', fontWeight: 600 }}>here</span>
          </Link>
          .
        </Typography>
        <Typography className={gothamFont.className} variant="h6">
          If you have any questions regarding the content of the Open API Table
          please post them as discussion topics on the{' '}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://engage.tmforum.org/communities/community-home?CommunityKey=d543b8ba-9d3a-4121-85ce-5b68e6c31ce5&_ga=2.247688007.1587599263.1677764074-178524392.1673272693&_gl=1*ld75ey*_ga*MTc4NTI0MzkyLjE2NzMyNzI2OTM.*_ga_KQXXW9EY6Y*MTY3Nzg1MTg5MC42Ny4xLjE2Nzc4NTIyMzcuMC4wLjA.*_ga_W21R8NVK4E*MTY3Nzg0Nzc1Ni4zNC4xLjE2Nzc4NTIyMzcuMC4wLjA."
          >
            <span style={{ color: '#266ED9', fontWeight: 600 }}>
              Open API Community Forum
            </span>
          </Link>
          .
        </Typography>
      </Box>
      <Box className="hero__right">
        <Box className="hero__right__inside">
          <Typography
            className={gothamFont.className}
            variant="h5"
            sx={{
              color: '#E0121D',
              fontWeight: 600,
              lineHeight: '125%',
            }}
          >
            Appears in the following playbooks
          </Typography>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.tmforum.org/how-can-i-get-my-api-implementation-to-be-conformant-to-tm-forum-open-api-specifications/?_ga=2.177234149.1587599263.1677764074-178524392.1673272693&_gl=1*7h4meo*_ga*MTc4NTI0MzkyLjE2NzMyNzI2OTM.*_ga_W21R8NVK4E*MTY3Nzg0Nzc1Ni4zNC4xLjE2Nzc4NTI2ODYuMC4wLjA.*_ga_KQXXW9EY6Y*MTY3Nzg1MTg5MC42Ny4xLjE2Nzc4NTI2ODcuMC4wLjA."
          >
            <Box className="hero__right__inside__middle">
              <Typography
                sx={{ lineHeight: '125%', fontWeight: 600 }}
                className={gothamFont.className}
                variant="h6"
              >
                How can I get my product to be conformant against TM Forum Open
                APIs?
              </Typography>
              <LaunchIcon />
            </Box>
          </Link>
          <Button>View More</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
