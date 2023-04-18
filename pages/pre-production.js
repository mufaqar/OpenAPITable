import { useState } from 'react';
import { InputAdornment, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import Banner from '../components/Banner/Banner';
import SortTable from '../components/Table/SortTable';
import { fetchBetaTableData } from '../services/TableData/api';
import SearchIcon from '@mui/icons-material/Search';
import { searchTable } from '../helpers/searchTable';
import HeroPreProduction from '../components/Hero/HeroPreProduction';
import { gothamFont } from '../helpers/gothamFont';

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
        <HeroPreProduction />
        <Box id="search" className="table-menu">
          <TextField
            className="table-menu__search"
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
              input: {
                '::placeholder': {
                  fontFamily: gothamFont.fontFamily,
                  color: '#A9ADB1',
                  opacity: 1,
                  fontWeight: 600,
                  letterSpacing: '0.6px',
                },
              },
            }}
          />
          <Box className="table-menu__btns">
            <button className="pre-production-btn">
              <span className={gothamFont.className}>Pre-Production</span>
            </button>
            <button
              className={showList ? 'gray-btn-active' : 'gray-btn'}
              onClick={handleButtonClick}
            >
              <span className={gothamFont.className}>Other Tables</span>
            </button>
          </Box>
          {showList && (
            <>
              <Box className="show-list-wrapper">
                <Paper className="show-list">
                  <Box className="show-list-btns">
                    <Link href="/">
                      <Typography
                        className={gothamFont.className}
                        sx={{
                          fontWeight: 500,
                          fontSize: '16px',
                          lineHeight: '140%',
                          color: 'black',
                        }}
                      >
                        Production
                      </Typography>
                    </Link>
                    <Link href="/historic">
                      <span
                        className={gothamFont.className}
                        style={{
                          fontWeight: 500,
                          fontSize: '16px',
                          lineHeight: '140%',
                          color: 'black',
                        }}
                      >
                        Historic
                      </span>
                    </Link>
                  </Box>
                </Paper>
              </Box>
              <Box className="show-list-arrow" />
            </>
          )}
        </Box>
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
