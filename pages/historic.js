import {
  Alert,
  Button,
  Collapse,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import { useState } from 'react';
import Banner from '../components/Banner/Banner';
import Hero from '../components/Hero/Hero';
import SortTable from '../components/Table/SortTable';
import { searchTable } from '../helpers/searchTable';
import { fetchHistoricTableData } from '../services/TableData/api';
import SearchIcon from '@mui/icons-material/Search';
import { gothamFont } from '../helpers/gothamFont';

const Historic = (props) => {
  const { historicTableData } = props;
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
            <Link href="/">
              <Button color="error" variant="contained">
                Historic
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
                  <Link href="/pre-production">
                    <Button variant="outlined">Pre-Production</Button>
                  </Link>
                </Stack>
              </Paper>
            </Collapse>
          </Box>
        </Box>
        <Alert severity="warning" sx={{ maxWidth: '1550px', margin: '0 auto' }}>
          <Typography className={gothamFont.className}>
            You are on Historic page!
          </Typography>
        </Alert>
        <SortTable
          data={searchTable(historicTableData, query)}
          historic={true}
        />
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
