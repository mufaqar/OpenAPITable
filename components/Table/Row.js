import { useState } from 'react';
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Link from 'next/link';
import { removeHtmlTags } from '../../helpers/removeHtmlTags';
import { transformToFullName } from '../../helpers/transformToFullName';
import Image from 'next/image';
import { gothamFont } from '../../helpers/gothamFont';
import { useAuth } from 'react-oidc-context';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useSelector } from 'react-redux';
import { transformForTrackClick } from '../../helpers/transformForTrackClick';
import TagManager from 'react-gtm-module';

const Row = (props) => {
  const { row, production = false, historic = false, beta = false } = props;
  const [open, setOpen] = useState(false);
  const auth = useAuth();
  const userData = useSelector((state) => state.userData);

  const collapseRowBgColor = (i) => {
    if (historic) {
      return {
        backgroundColor: i % 2 ? '#FFEFEF' : '#FFF8F8',
      };
    }

    return {
      backgroundColor: i % 2 ? '#F2F4F4' : '#F8F9F9',
    };
  };

  const checkExstension = (fileName) => {
    const ext = fileName.split('.').pop();
    return ext;
  };

  const getButton = (historyRow) => {
    if ((production || historic) && !auth.isAuthenticated) {
      return (
        <Box className="get-access">
          <LockOutlinedIcon fontSize="small" sx={{ color: '#3577DA' }} />
          <Box className="get-access__text">
            <p
              className={gothamFont.className}
              style={{
                fontSize: '14px',
                color: '#000000',
                lineHeight: '16px',
              }}
            >
              Login or register
            </p>
            <p
              className={gothamFont.className}
              onClick={() => void auth.signinRedirect()}
              style={{
                fontSize: '14px',
                color: '#3577DA',
                lineHeight: '16px',
                textDecorationLine: 'underline',
                cursor: 'pointer',
              }}
            >
              Get access
            </p>
          </Box>
        </Box>
      );
    }

    if (beta && !auth.isAuthenticated) {
      return (
        <Box className="get-access">
          <LockOutlinedIcon fontSize="small" sx={{ color: '#3577DA' }} />
          <Box className="get-access__text">
            <p
              className={gothamFont.className}
              style={{
                fontSize: '14px',
                color: '#000000',
                lineHeight: '16px',
              }}
            >
              For Forum members
            </p>
            <p
              className={gothamFont.className}
              onClick={() => void auth.signinRedirect()}
              style={{
                fontSize: '14px',
                color: '#3577DA',
                lineHeight: '16px',
                textDecorationLine: 'underline',
                cursor: 'pointer',
              }}
            >
              Get access
            </p>
          </Box>
        </Box>
      );
    }

    if (beta && auth.isAuthenticated && userData?.role !== 'member') {
      return (
        <Box className="get-access">
          <LockOutlinedIcon fontSize="small" sx={{ color: '#3577DA' }} />
          <Box className="get-access__text">
            <p
              className={gothamFont.className}
              style={{
                fontSize: '14px',
                color: '#000000',
                lineHeight: '16px',
              }}
            >
              For Forum members
            </p>
            <Link
              href="https://www.tmforum.org/membership/how-to-join/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p
                className={gothamFont.className}
                style={{
                  fontSize: '14px',
                  color: '#3577DA',
                  lineHeight: '16px',
                  textDecorationLine: 'underline',
                  cursor: 'pointer',
                }}
              >
                Get access
              </p>
            </Link>
          </Box>
        </Box>
      );
    }

    return (
      <button
        className="download-btn"
        onClick={(e) => {
          trackclick(
            historyRow.download,
            transformForTrackClick(historyRow.type),
            row.api_name,
            userData?.email || '',
            e
          );

          TagManager.dataLayer({
            dataLayer: {
              event: 'file_download',
              link_classes:
                'button MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium',
              link_domain: 'www.tmforum.org',
              link_id: 'unknown',
              link_text:
                checkExstension(historyRow.name) === 'zip'
                  ? 'download'
                  : 'view',
              file_extension: checkExstension(historyRow.name),
              item_id: row.document_number.toLowerCase(), //TODO: check this
              resource_availibility: beta ? 'member' : 'all',
              resource_version: row.version_info.replace('v', ''), //check this
              resource_status: beta ? 'team approved' : 'tm forum approved',
              resource_document_type: historyRow.type,
              resource_publication_date: row.published_date,
              page_topics: 'open apis',
              resource_maturity_level: 'general availability (ga)',
              resource_author: 'open api project',
              sf_account_id: userData?.accountid
                ? userData?.accountid
                : 'unknown',
              user_country: 'unknown',
              user_region: 'unknown',
              user_job_title: 'unknown',
              membership_status: userData?.role ? userData?.role : 'non-member',
              login_status: 'logged_in',
              website: 'https://www.tmforum.org',
              sf_contact_id: userData?.contactid
                ? userData?.contactid
                : 'unknown',
              user_engagement_status: 'low',
              oda_member: 'no',
              csp: 'other',
              account_level: 'unknown',
              account_type: 'unknown',
              company_industry_1: 'unknown',
              company_industry_2: 'unknown',
              communication_opt_in: 'opt-out',
              job_function: 'unknown',
              Outbound: 'TRUE',
              file_name: row.api_name.toLowerCase(), //check this
              link_url: historyRow.download,
            },
          });
        }}
      >
        {checkExstension(historyRow.name) === 'zip' ? (
          <Image
            src="/oda/open-apis/table/images/download.svg"
            alt="download icon"
            width={18}
            height={18}
          />
        ) : (
          <Image
            src="/oda/open-apis/table/images/launch-blue.svg"
            alt="launch icon"
            width={14}
            height={14}
          />
        )}

        <span className={gothamFont.className}>
          {checkExstension(historyRow.name) === 'zip' ? 'Download' : 'View'}
        </span>
      </button>
    );
  };

  return (
    <>
      <TableRow
        id={`${row.document_number}-${row.version_info}`}
        style={{
          border: '4px solid #FFF8F8',
          borderRadius: 5,
          margin: '10px 0',
        }}
      >
        <TableCell sx={{ verticalAlign: 'top', maxWidth: 40, padding: '11px' }}>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? (
              <KeyboardArrowUpIcon sx={{ color: '#1A2746' }} fontSize="small" />
            ) : (
              <KeyboardArrowRightIcon
                sx={{ color: '#1A2746' }}
                fontSize="small"
              />
            )}
          </IconButton>
        </TableCell>
        <TableCell sx={{ maxWidth: beta ? 230 : 350 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box
              sx={{
                display: 'flex',
                gap: '7px',
                alignItems: 'center',
                marginBottom: '10px',
                flex: 0,
              }}
            >
              <h2
                variant="h6"
                className={`${gothamFont.className} api-name`}
                onClick={() => setOpen(!open)}
              >
                {row.api_name}
              </h2>
              {historic && (
                <Typography
                  className={gothamFont.className}
                  variant="body1"
                  color="error"
                  sx={{ fontWeight: 'bold', fontStyle: 'italic' }}
                >
                  [Historic]
                </Typography>
              )}
            </Box>
            <Box>
              <p className={`${gothamFont.className} api-table-text`}>
                {removeHtmlTags(row.api_description)}
              </p>
            </Box>
          </Box>
        </TableCell>
        <TableCell
          align="center"
          sx={{ minWidth: 145, maxWidth: 100, padding: '16px 0px' }}
        >
          <span className={`${gothamFont.className} api-table-text`}>
            {row.context}
          </span>
        </TableCell>
        <TableCell align="center" sx={{ minWidth: 175, padding: '16px 0px' }}>
          <span className={`${gothamFont.className} api-table-text`}>
            {row.document_number}
          </span>
        </TableCell>
        <TableCell align="center" sx={{ padding: '16px 0px' }}>
          <span className={`${gothamFont.className} api-table-text`}>
            {row.version_info}
          </span>
        </TableCell>
        <TableCell align="center" sx={{ minWidth: 160, padding: '16px 0px' }}>
          <span className={`${gothamFont.className} api-table-text`}>
            {row.published_date}
          </span>
        </TableCell>
        <TableCell align="center" sx={{ padding: '16px 0px' }}>
          <Typography className={gothamFont.className}>
            {row.notes ? (
              row.notes
            ) : (
              <span className={`${gothamFont.className} table-notes-text`}>
                No notes
              </span>
            )}
          </Typography>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{ padding: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
              <Table>
                <TableBody>
                  {row.options?.map((historyRow, i) => (
                    <TableRow key={i} sx={collapseRowBgColor(i)}>
                      <TableCell
                        align="left"
                        sx={{
                          padding: 0,
                          marginLeft: '20px',
                          maxWidth: beta ? 7 : 26,
                        }}
                      >
                        <Image
                          src={`/oda/open-apis/table/images/apiOptions/${historyRow.type}.svg`}
                          width={24}
                          height={24}
                          alt="logo"
                          style={{ objectFit: 'cover', marginLeft: '38px' }}
                        />
                      </TableCell>
                      <TableCell sx={{ paddingRight: '0' }}>
                        <Typography
                          className={gothamFont.className}
                          sx={{
                            fontWeight: 600,
                            fontSize: '16px',
                            lineHeight: '24px',
                          }}
                        >
                          {transformToFullName(historyRow.type)}
                        </Typography>
                      </TableCell>
                      <TableCell align="right" sx={{ width: '12%' }}>
                        {getButton(historyRow)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default Row;
