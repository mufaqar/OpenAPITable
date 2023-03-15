import Image from 'next/image';
import Box from '@mui/system/Box';
import Link from 'next/link';
import { Typography } from '@mui/material';

const Navigation = () => {
  const navigationLinks = [
    'Knowledge',
    'Labs',
    'Code + frameworks',
    'Training + accreditation',
    'Events',
    'Membership',
    'About',
    'Contact',
  ];

  return (
    <Box className="navigation">
      <Image
        src="/oda/open-apis/table/images/tmf-logo.svg"
        alt="TM Forum logo"
        width={136}
        height={28.4}
      />
      <Box className="navigation__links">
        {navigationLinks.map((link) => {
          return (
            <Link href="/" className="navigation__link" key={link}>
              <Typography>{link}</Typography>
            </Link>
          );
        })}
      </Box>
      <Box className="navigation__icons">
        <Image
          src="/oda/open-apis/table/images/tmf-search-icon.svg"
          alt="TM Forum logo"
          width={24}
          height={24}
        />
        <Image
          src="/oda/open-apis/table/images/tmf-user-icon.svg"
          alt="TM Forum logo"
          width={24}
          height={24}
        />
      </Box>
    </Box>
  );
};
export default Navigation;
