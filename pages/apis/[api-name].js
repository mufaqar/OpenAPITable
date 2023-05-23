import React from 'react';
import { useRouter } from 'next/router';
import Banner from '../../components/Banner/Banner';
import { Box } from '@mui/material';
// import Hero2 from '../../components/Testing/Hero2';

const ApiName = () => {
  const router = useRouter();
  const query = router.query;

  return (
    <div>
      <Banner />
      <Box
        className="home"
        sx={{ backgroundColor: 'lightgray !important', height: '450px' }}
      >
        {/* <Hero2 /> */}
      </Box>
    </div>
  );
};

export default ApiName;
