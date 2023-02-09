import { Alert, Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import Banner from '../components/Banner/Banner';
import Hero from '../components/Hero/Hero';
import SortTable from '../components/Table/SortTable';
import { fetchBetaTableData } from '../services/TableData/api';

const Beta = (props) => {
  const { betaTableData } = props;

  return (
    <Box>
      <Banner />
      <Box className="home">
        <Hero />
        <Box
          sx={{
            maxWidth: '1550px',
            margin: '20px auto',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <TextField placeholder="Search for API" />
          <Box>
            <Link href="/">
              <Button variant="outlined">Production</Button>
            </Link>

            <Button
              variant="contained"
              color="error"
              sx={{ marginLeft: '16px' }}
            >
              Pre-Production
            </Button>
          </Box>
        </Box>
        <Alert severity="warning" sx={{ maxWidth: '1550px', margin: '0 auto' }}>
          You are on Pre-Production / Beta page — check it out!
        </Alert>
        <SortTable data={betaTableData} />
      </Box>
    </Box>
  );
};

export default Beta;

export async function getServerSideProps() {
  const betaTableData = await fetchBetaTableData();

  return {
    props: {
      betaTableData,
    },
  };
}
