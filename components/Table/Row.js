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

const Row = (props) => {
  const { row, production = false, historic = false, beta = false } = props;
  const [open, setOpen] = useState(false);
  const auth = useAuth();

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
              <Link
                href={{
                  pathname: `apis/${row.document_number}`,
                }}
              >
                <h2 variant="h6" className={`${gothamFont.className} api-name`}>
                  {row.api_name}
                </h2>
              </Link>
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
                        {(beta || production) && !auth.isAuthenticated ? (
                          <Box className="get-access">
                            <LockOutlinedIcon
                              fontSize="small"
                              sx={{ color: '#3577DA' }}
                            />
                            <Box className="get-access__text">
                              <p
                                className={gothamFont.className}
                                style={{
                                  fontSize: '14px',
                                  color: '#000000',
                                  lineHeight: '16px',
                                }}
                              >
                                {production
                                  ? 'Login or register'
                                  : 'For Forum members'}
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
                        ) : (
                          <Link
                            href={historyRow.download}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button
                              className="download-btn"
                              onClick={() =>
                                trackclick(
                                  'https://tmf-open-api-table-documents.s3.eu-west-1.amazonaws.com/OpenApiTable/4.0.0/swagger/TMF666-Account-v4.0.0.swagger.json',
                                  'Swagger',
                                  'Account Management API',
                                  'bpavlic@tmforum.org'
                                )
                              }
                            >
                              <Image
                                src="/oda/open-apis/table/images/download.svg"
                                alt="download icon"
                                width={18}
                                height={18}
                              />
                              <span className={gothamFont.className}>
                                Download
                              </span>
                            </button>
                          </Link>
                        )}
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
