import { InputAdornment, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import { useState } from 'react';
import Banner from '../components/Banner/Banner';
import HeroHistoric from '../components/Hero/HeroHistoric';
import SortTable from '../components/Table/SortTable';
import { searchTable } from '../helpers/searchTable';
import { fetchHistoricTableData } from '../services/TableData/api';
import SearchIcon from '@mui/icons-material/Search';
import { gothamFont } from '../helpers/gothamFont';
import Image from 'next/image';

const Historic = (props) => {
  const { historicTableData } = props;
  const [showList, setShowList] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [query, setQuery] = useState('');

  const handleButtonClick = () => {
    setShowList((oldState) => !oldState);
  };

  return (
    <Box>
      <Banner />
      <Box className="home">
        <HeroHistoric />
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
            <Image
              src="/oda/open-apis/table/images/info_icon.svg"
              alt="info icon"
              width={20}
              height={20}
              onMouseEnter={() => setShowInfo(true)}
              onMouseLeave={() => {
                setTimeout(() => {
                  setShowInfo(false);
                }, 100000);
              }}
            />
            <button className="red-btn">
              <span className={gothamFont.className}>Historic</span>
            </button>
            <button
              className={showList ? 'gray-btn-active' : 'gray-btn'}
              onClick={handleButtonClick}
            >
              <span className={gothamFont.className}>Other Tables</span>
            </button>
          </Box>
          {showInfo && (
            <Box
              sx={{
                position: 'absolute',
                padding: '10px 12px',
                width: '262px',
                background: '#102338',
                borderRadius: '5px',
                color: '#FFFFFF',
                zIndex: 1,
                right: 125,
                top: -132,
              }}
            >
              <p className={gothamFont.className}>
                The APIs shown on this table are not the latest APIs but are
                supported. For previous unsupported versions please visit our
                API archive{' '}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    'https://projects.tmforum.org/wiki/display/API/Open+API+Table+-+Previous+%28N-2%29+Versions'
                  }
                >
                  <span
                    style={{ cursor: 'pointer', textDecoration: 'underline' }}
                  >
                    here
                  </span>
                </Link>
                .
              </p>
              <Box className="info-arrow" />
            </Box>
          )}
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
                    <Link href="/pre-production">
                      <Typography
                        className={gothamFont.className}
                        sx={{
                          fontWeight: 500,
                          fontSize: '16px',
                          lineHeight: '140%',
                          color: 'black',
                        }}
                      >
                        Pre-Production
                      </Typography>
                    </Link>
                  </Box>
                </Paper>
              </Box>
              <Box className="show-list-arrow" />
            </>
          )}
        </Box>
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
