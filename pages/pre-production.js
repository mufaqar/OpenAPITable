import { useEffect, useState } from 'react';
import { InputAdornment, Paper, TextField } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import Banner from '../components/Banner/Banner';
import SortTable from '../components/Table/SortTable';
import { fetchBetaTableData } from '../services/TableData/api';
import SearchIcon from '@mui/icons-material/Search';
import { searchTable } from '../helpers/searchTable';
import HeroPreProduction from '../components/Hero/HeroPreProduction';
import { gothamFont } from '../helpers/gothamFont';
import Head from 'next/head';
import { useAuth } from 'react-oidc-context';
import { useSelector } from 'react-redux';
import TagManager from 'react-gtm-module';

const Beta = (props) => {
  const { betaTableData } = props;

  const [showList, setShowList] = useState(false);
  const [query, setQuery] = useState('');

  const auth = useAuth();
  const userData = useSelector((state) => state.userData);

  const handleButtonClick = () => {
    setShowList((oldState) => !oldState);
  };

  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'page_view',
        sf_account_id: userData?.accountid ? userData?.accountid : 'unknown',
        user_country: 'unknown',
        user_region: 'unknown',
        user_job_title: 'unknown',
        membership_status: userData?.role ? userData?.role : 'non-member',
        login_status: auth.isAuthenticated ? 'logged in' : 'not logged in',
        website: 'https://www.tmforum.org',
        sf_contact_id: userData?.contactid,
        user_engagement_status: 'low',
        oda_member: 'no',
        csp: 'other',
        account_level: 'unknown',
        account_type: 'unknown',
        communication_opt_in: 'opt-out',
        job_function: 'unknown',
        company_industry_1: 'unknown',
        company_industry_2: 'unknown',
        page_url: window.location.href,
        page_title: 'open api table pre-production - tm forum',
        page_business_unit: 'open-api-table',
        page_value: 'open api table pre-production',
        page_topics: 'open apis',
      },
    });
  }, [
    auth.isAuthenticated,
    userData?.accountid,
    userData?.contactid,
    userData?.role,
  ]);

  useEffect(() => {
    localStorage.setItem('currentPage', window.location.href);
  }, []);

  return (
    <Box>
      <Head>
        <title>
          60+ Open APIs tried, tested and de-risked - Pre-production table - TM
          Forum
        </title>
        <meta
          property="og:title"
          content="60+ Open APIs tried, tested and de-risked - Pre-production table - TM Forum"
        />
        <meta
          name="description"
          content="This table contains TM Forum APIs in the early adoption or still in development. These APIs are available to members only. You can also click through to the latest production APIs from this page."
          key="desc"
        />
        <meta
          property="og:description"
          content="This table contains TM Forum APIs in the early adoption or still in development. These APIs are available to members only. You can also click through to the latest production APIs from this page"
        />
        <meta
          property="og:image"
          content="https://amartus.com/wp-content/uploads/2023/01/OpenAPIs_logo2018Badge.png"
        />
      </Head>
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
                  fontWeight: 500,
                  lineHeight: '14px',
                },
              },
            }}
          />
          <Box className="table-menu__btns">
            <button className="pre-production-btn">
              <span className={gothamFont.className}>Pre-production</span>
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
                    <Link href="/">
                      <span
                        className={gothamFont.className}
                        style={{
                          fontWeight: 500,
                          fontSize: '16px',
                          lineHeight: '140%',
                          color: 'black',
                        }}
                      >
                        Production
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
        <SortTable data={searchTable(betaTableData, query)} beta={true} />
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
