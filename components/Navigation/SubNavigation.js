import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const SubNavigation = () => {
  const navLinks = [
    'Open Digital Architecture',
    'Quick Links',
    'Resources',
    'Projects',
    'Communities',
  ];

  return (
    <Box className="subNavigation">
      {navLinks.map((link) => (
        <Link key={link} href="/">
          <Typography className="subNavigation__item">{link}</Typography>
        </Link>
      ))}
    </Box>
  );
};

export default SubNavigation;
