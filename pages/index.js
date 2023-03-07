import { useState } from 'react';
import {
  Button,
  Collapse,
  InputAdornment,
  Paper,
  Stack,
  TextField,
} from '@mui/material';
import Box from '@mui/material/Box';
import Banner from '../components/Banner/Banner';
import Hero from '../components/Hero/Hero';
import SortTable from '../components/Table/SortTable';
import { fetchProductionTableData } from '../services/TableData/api';
import Link from 'next/link';
import { searchTable } from '../helpers/searchTable';
import SearchIcon from '@mui/icons-material/Search';

const Home = (props) => {
  const { productionTableData } = props;
  const [showList, setShowList] = useState(false);
  const [query, setQuery] = useState('');

  const handleButtonClick = () => {
    setShowList((oldState) => !oldState);
  };

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
              <Button variant="contained">Production</Button>
            </Link>
            <Button
              onClick={handleButtonClick}
              sx={{ marginLeft: '20px' }}
              variant="outlined"
            >
              Other Tables
            </Button>
            <Collapse in={showList}>
              <Paper
                sx={{
                  marginTop: '20px',
                  width: '200px',
                  padding: '16px',
                }}
              >
                <Stack gap="16px">
                  <Link href="/historic">
                    <Button fullWidth variant="outlined">
                      Historic
                    </Button>
                  </Link>
                  <Link href="/pre-production">
                    <Button variant="outlined">Pre-Production</Button>
                  </Link>
                </Stack>
              </Paper>
            </Collapse>
          </Box>
        </Box>
        <SortTable data={searchTable(productionTableData, query)} />
      </Box>
    </Box>
  );
};

export default Home;

export async function getServerSideProps() {
  const productionTableData = await fetchProductionTableData();

  return {
    props: {
      productionTableData,
    },
  };
}
