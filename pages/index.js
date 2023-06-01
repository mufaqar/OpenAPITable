import { useEffect, useState } from 'react';
import { InputAdornment, Paper, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Banner from '../components/Banner/Banner';
import HeroProduction from '../components/Hero/HeroProduction';
import SortTable from '../components/Table/SortTable';
import { fetchProductionTableData } from '../services/TableData/api';
import Link from 'next/link';
import { searchTable } from '../helpers/searchTable';
import SearchIcon from '@mui/icons-material/Search';
import { gothamFont } from '../helpers/gothamFont';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Home = (props) => {
  const { productionTableData } = props;
  const router = useRouter();
  const [showList, setShowList] = useState(false);
  const [query, setQuery] = useState('');

  const handleButtonClick = () => {
    setShowList((oldState) => !oldState);
  };

  useEffect(() => {
    localStorage.setItem('currentPage', router.pathname);
  }, [router]);

  return (
    <Box>
      <Head>
        <title>Open API table - Production</title>
        <meta property="og:title" content="Open API table - Production" />
        <meta name="description" content="Checkout our cool page" key="desc" />
        <meta
          property="og:description"
          content="And a social description for our cool page"
        />
        <meta
          property="og:image"
          content="https://amartus.com/wp-content/uploads/2023/01/OpenAPIs_logo2018Badge.png"
        />
      </Head>
      <Banner />
      <Box className="home">
        <HeroProduction />
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
                  fontWeight: 500,
                  lineHeight: '14px',
                },
              },
            }}
          />
          <Box className="table-menu__btns">
            <button className="blue-btn">
              <span className={gothamFont.className}>Production</span>
            </button>
            <button
              className={showList ? 'gray-btn-active' : 'gray-btn'}
              onClick={handleButtonClick}
            >
              <span className={gothamFont.className}>Other tables</span>
            </button>
          </Box>
          {showList && (
            <>
              <Box className="show-list-wrapper">
                <Paper className="show-list">
                  <Box className="show-list-btns">
                    <Link href="/pre-production">
                      <span
                        className={gothamFont.className}
                        style={{
                          fontWeight: 500,
                          fontSize: '16px',
                          lineHeight: '140%',
                          color: 'black',
                        }}
                      >
                        Pre-production
                      </span>
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
        <SortTable
          data={searchTable(productionTableData, query)}
          production={true}
        />
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
