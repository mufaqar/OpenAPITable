import { Box, Button } from '@mui/material';
import { gothamFont } from '../../helpers/gothamFont';
import Link from 'next/link';
import Image from 'next/image';

const HeroProduction = () => {
  return (
    <Box className="heroWrapper">
      <Box className="hero__left">
        <h1 className={gothamFont.className}>Open API table</h1>
        <p className={gothamFont.className}>
          This table contains the latest Production versions of the{' '}
          <Link
            href="https://www.tmforum.org/oda/open-apis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span style={{ color: '#266ED9', fontWeight: 600 }}>Open APIs</span>
          </Link>
          , for which TM Forum provides{' '}
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
        </p>
        <p className={gothamFont.className}>
          If you have any questions regarding the content of the Open API table
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
      <Box className="hero__right">
        <Box className="hero__right__inside">
          <h2 className={gothamFont.className}>
            Appears in the following playbook
          </h2>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.tmforum.org/how-can-i-get-my-api-implementation-to-be-conformant-to-tm-forum-open-api-specifications/?_ga=2.177234149.1587599263.1677764074-178524392.1673272693&_gl=1*7h4meo*_ga*MTc4NTI0MzkyLjE2NzMyNzI2OTM.*_ga_W21R8NVK4E*MTY3Nzg0Nzc1Ni4zNC4xLjE2Nzc4NTI2ODYuMC4wLjA.*_ga_KQXXW9EY6Y*MTY3Nzg1MTg5MC42Ny4xLjE2Nzc4NTI2ODcuMC4wLjA."
          >
            <Box className="hero__right__inside__middle">
              <p className={gothamFont.className}>
                How can I get my product to be conformant against TM Forum Open
                APIs?
              </p>
              <Image
                src="/oda/open-apis/table/images/launch.svg"
                alt="launch icon"
                width={18}
                height={18}
              />
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroProduction;
