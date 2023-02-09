import { Alert, Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import Banner from '../components/Banner/Banner';
import Hero from '../components/Hero/Hero';
import SortTable from '../components/Table/SortTable';
import { fetchHistoricTableData } from '../services/TableData/api';

const Historic = (props) => {
  const { historicTableData } = props;

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
            <Link href="/historic">
              <Button
                variant="contained"
                color="error"
                sx={{ marginLeft: '16px' }}
              >
                Historic
              </Button>
            </Link>
          </Box>
        </Box>
        <Alert severity="warning" sx={{ maxWidth: '1550px', margin: '0 auto' }}>
          You are on Historic page — check it out!
        </Alert>
        <SortTable data={historicTableData} historic />
      </Box>
    </Box>
  );
};

export default Historic;

export async function getServerSideProps() {
  const historicTableData = await fetchHistoricTableData();

  return {
    props: {
      historicTableData,
    },
  };
}
