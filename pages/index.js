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
import { useAuth } from 'react-oidc-context';

const Home = (props) => {
  const { productionTableData } = props;
  const router = useRouter();
  const [showList, setShowList] = useState(false);
  const [query, setQuery] = useState('');
  const userData = useSelector((state) => state.userData);
  const auth = useAuth();

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
        sf_contact_id: userData?.contactid ? userData?.contactid : 'unknown',
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
        page_title: 'open api table - tm forum',
        page_business_unit: 'open-api-table',
        page_value: 'open api table',
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
