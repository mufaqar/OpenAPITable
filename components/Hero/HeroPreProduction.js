import { Box } from '@mui/material';
import { gothamFont } from '../../helpers/gothamFont';
import Link from 'next/link';

const HeroPreProduction = () => {
  return (
    <Box className="heroWrapper">
      <Box className="hero__left">
        <h2 className={gothamFont.className}>Pre-production Open API Table</h2>
        <p className={gothamFont.className}>
          This table contains APIs in the early adoption or still in
          development. For Production APIs please click{' '}
          <Link href="/">
            <span style={{ color: '#266ED9', fontWeight: 600 }}>here</span>
          </Link>
          . For previous versions which are no longer supported please click{' '}
          <Link href="/historic">
            <span style={{ color: '#266ED9', fontWeight: 600 }}>here</span>
          </Link>
          .
        </p>
        <p className={gothamFont.className}>
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
        </p>
      </Box>
    </Box>
  );
};

export default HeroPreProduction;
