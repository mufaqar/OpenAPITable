import { useState } from 'react';
import {
  Box,
  Button,
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

const Row = (props) => {
  const { row, historic } = props;
  const [open, setOpen] = useState(false);

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

  const addSlash = (url) => {
    if (url.charAt(7) !== '/') {
      return url.slice(0, 7) + '/' + url.slice(7);
    }
    return url;
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
        <TableCell sx={{ maxWidth: 1000 }}>
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
        <TableCell align="center">
          <span className={`${gothamFont.className} api-table-text`}>
            {row.context}
          </span>
        </TableCell>
        <TableCell align="center" sx={{ minWidth: 207 }}>
          <span className={`${gothamFont.className} api-table-text`}>
            {row.document_number}
          </span>
        </TableCell>
        <TableCell align="center">
          <span className={`${gothamFont.className} api-table-text`}>
            {row.version_info}
          </span>
        </TableCell>
        <TableCell align="center" sx={{ minWidth: 192 }}>
          <span className={`${gothamFont.className} api-table-text`}>
            {row.published_date}
          </span>
        </TableCell>
        <TableCell align="center">
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
                      <TableCell align="right" sx={{ padding: 0 }}>
                        <Image
                          src={`/oda/open-apis/table/images/apiOptions/${historyRow.type}.svg`}
                          width={24}
                          height={24}
                          alt="logo"
                          style={{ objectFit: 'cover' }}
                        />
                      </TableCell>
                      <TableCell>
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
                        <Link
                          href={addSlash(historyRow.download)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="download-btn">
                            <Image
                              src="/oda/open-apis/table/images/download.svg"
                              alt="download icon"
                              width={18}
                              height={18}
                            />
                            <span>Download</span>
                          </button>
                        </Link>
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
