import { Alert, Button, InputAdornment, TextField } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import { useState } from 'react';
import Banner from '../components/Banner/Banner';
import Hero from '../components/Hero/Hero';
import SortTable from '../components/Table/SortTable';
import { searchTable } from '../helpers/searchTable';
import { fetchHistoricTableData } from '../services/TableData/api';
import SearchIcon from '@mui/icons-material/Search';

const Historic = (props) => {
  const { historicTableData } = props;
  const [query, setQuery] = useState('');

  return (
    <Box>
      <Banner />
      <Box className="home">
        <Hero />
        <Box
          id="search"
          sx={{
            maxWidth: '1550px',
            margin: '70px auto 0 auto',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <TextField
            placeholder="Search for API"
            onChange={(e) => setQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ width: '360px' }}
          />
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
        <SortTable data={searchTable(historicTableData, query)} historic />
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
