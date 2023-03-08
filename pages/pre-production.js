import { useState } from 'react';
import {
  Alert,
  Button,
  Collapse,
  InputAdornment,
  Paper,
  Stack,
  TextField,
} from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import Banner from '../components/Banner/Banner';
import Hero from '../components/Hero/Hero';
import SortTable from '../components/Table/SortTable';
import { fetchBetaTableData } from '../services/TableData/api';
import SearchIcon from '@mui/icons-material/Search';
import { searchTable } from '../helpers/searchTable';

const Beta = (props) => {
  const { betaTableData } = props;
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
            margin: '70px auto 20px auto',
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
            <Link href="/pre-production">
              <Button color="error" variant="contained">
                Pre-Production
              </Button>
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
                  <Link href="/">
                    <Button fullWidth variant="outlined">
                      Production
                    </Button>
                  </Link>
                  <Link href="/historic">
                    <Button fullWidth variant="outlined">
                      Historic
                    </Button>
                  </Link>
                </Stack>
              </Paper>
            </Collapse>
          </Box>
        </Box>
        <Alert severity="warning" sx={{ maxWidth: '1550px', margin: '0 auto' }}>
          You are on Pre-Production / Beta page — check it out!
        </Alert>
        <SortTable data={searchTable(betaTableData, query)} />
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
