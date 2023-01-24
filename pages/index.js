import Box from '@mui/material/Box';
import Banner from '../components/Banner/Banner';
import Hero from '../components/Hero/Hero';
import SortTable from '../components/Table/SortTable';

const Home = () => {
  return (
    <Box>
      <Banner />
      <Box className="home">
        <Hero />
        <SortTable />
      </Box>
    </Box>
  );
};

export default Home;
