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
import TagManager from 'react-gtm-module';
import { useSelector } from 'react-redux';

const tagManagerArgs = {
  gtmId: process.env.NEXT_PUBLIC_GTM_ID,
  events: {
    page_view: 'Page View',
    file_download: 'File Download',
  },
};

const Home = (props) => {
  const { productionTableData } = props;
  const router = useRouter();
  const [showList, setShowList] = useState(false);
  const [query, setQuery] = useState('');
  const userData = useSelector((state) => state.userData);

  const handleButtonClick = () => {
    setShowList((oldState) => !oldState);
  };

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
    TagManager.dataLayer({
      dataLayer: {
        event: 'page_view',
        sf_account_id: userData?.accountid,
        user_country: 'ireland',
        user_region: 'europe',
        user_job_title: 'head of labs and tooling',
        membership_status: 'member',
        login_status: 'logged_in',
        website: 'https://www.tmforum.org',
        sf_contact_id: userData?.contactid,
        // user_engagement_status: 'e. vhigh 43+',
        // oda_member: 'no',
        // csp: 'other',
        // account_level: 'corporate d',
        // account_type: 'platinum',
        // company_industry: 'association/forum',
        // communication_opt_in: 'opt-out',
        // job_function: 'unknown',
        page_url: window.location.href,
        page_title: 'Open API table - TM Forum',
        page_business_unit: 'open-api-table',
        page_value: 'open api table',
        page_topics: 'open apis',
      },
    });
  }, [userData?.accountid, userData?.contactid]);

  useEffect(() => {
    localStorage.setItem('currentPage', router.pathname);
  }, [router]);

  return (
    <Box>
      <Head>
        <title>60+ Open APIs tried, tested and de-risked - TM Forum</title>
        <meta
          property="og:title"
          content="60+ Open APIs tried, tested and de-risked - TM Forum"
        />
        <meta
          name="description"
          content="TM Forum members, including the world’s largest service providers and suppliers, are developing these production Open APIs to enable open digital ecosystems and provide critical management functionality to digital services."
          key="desc"
        />
        <meta
          property="og:description"
          content="TM Forum members, including the world’s largest service providers and suppliers, are developing these production Open APIs to enable open digital ecosystems and provide critical management functionality to digital services."
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
