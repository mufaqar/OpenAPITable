import { useState } from 'react';
import {
  Button,
  Collapse,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import Banner from '../components/Banner/Banner';
import Hero from '../components/Hero/Hero';
import SortTable from '../components/Table/SortTable';
import { fetchProductionTableData } from '../services/TableData/api';
import Link from 'next/link';
import { searchTable } from '../helpers/searchTable';
import SearchIcon from '@mui/icons-material/Search';
import { gothamFont } from '../helpers/gothamFont';

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
            margin: '70px auto 20px auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <TextField
            id="outlined-basic"
            placeholder="Search for API"
            onChange={(e) => setQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            size="small"
            sx={{
              width: '383px',
              backgroundColor: '#F5F6F7',
              maxHeight: '38px',
              input: {
                '::placeholder': {
                  color: '#A9ADB1',
                  opacity: 1,
                  fontWeight: 600,
                  letterSpacing: '0.6px',
                  maxHeight: '38px',
                },
              },
            }}
          />

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link href="/">
              <button className="blue-btn">Production</button>
              {/* <Button
                variant="contained"
                sx={{
                  backgroundColor: '#3577DA',
                  textTransform: 'capitalize',
                  letterSpacing: '0.5px',
                }}
              >
                {console.log('gothamFont', gothamFont)}
                <span className={(gothamFont.className, 'abc')}>
                  Production
                </span>
              </Button> */}
            </Link>
            <button
              onClick={handleButtonClick}
              style={{
                marginLeft: '18px',
                backgroundColor: '#DBDBDB',
                textTransform: 'capitalize',
                border: 'none',
                color: 'black',
                height: '38px',
                borderRadius: '6px',
                padding: '8px 12px',
                cursor: 'pointer',
              }}
              variant="contained"
            >
              <span
                className={gothamFont.className}
                style={{ color: '#000000', fontWeight: 600 }}
              >
                Other Tables
              </span>
            </button>
          </Box>
          {showList && (
            <Box
              sx={{
                maxWidth: '1512px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'flex-end',
                zIndex: 1,
                position: 'absolute',
                right: 0,
                top: 50,
              }}
            >
              <Paper
                sx={{
                  width: '200px',
                  padding: '16px',
                  zIndex: 1,
                }}
              >
                <Stack gap="16px">
                  <Link href="/pre-production">
                    <Button fullWidth variant="outlined">
                      Pre-Production
                    </Button>
                  </Link>
                  <Link href="/historic">
                    <Button fullWidth variant="outlined">
                      Historic
                    </Button>
                  </Link>
                </Stack>
              </Paper>
            </Box>
          )}
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
