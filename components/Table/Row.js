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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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
        <TableCell sx={{ verticalAlign: 'top', maxWidth: 50 }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            sx={{
              borderTopLeftRadius: '10px',
              borderBottomLeftRadius: '10px',
            }}
          >
            {open ? (
              <KeyboardArrowDownIcon sx={{ color: '#1A2746' }} />
            ) : (
              <KeyboardArrowRightIcon sx={{ color: '#1A2746' }} />
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
                <Typography
                  variant="h6"
                  className={gothamFont.className}
                  color="#1A2746"
                  sx={{
                    fontStyle: 'normal',
                    fontWeight: '600',
                  }}
                >
                  {row.api_name}
                </Typography>
              </Link>
              {historic && (
                <>
                  <Typography
                    className={gothamFont.className}
                    variant="body1"
                    color="error"
                    sx={{ fontWeight: 'bold', fontStyle: 'italic' }}
                  >
                    [Historic]
                  </Typography>
                  <Typography
                    className={gothamFont.className}
                    variant="body1"
                    color="#929292"
                    sx={{
                      fontWeight: 600,
                      fontStyle: 'italic',
                    }}
                  >
                    [Depracated]
                  </Typography>
                </>
              )}
            </Box>
            <Box>
              <Typography
                className={gothamFont.className}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: '400',
                  color: '#000000',
                  wordBreak: 'break-word',
                }}
              >
                {removeHtmlTags(row.api_description)}
              </Typography>
            </Box>
          </Box>
        </TableCell>
        <TableCell align="center" sx={{ minWidth: 188 }}>
          <Typography className={gothamFont.className}>
            {row.context}
          </Typography>
        </TableCell>
        <TableCell align="center" sx={{ minWidth: 236 }}>
          <Typography className={gothamFont.className}>
            {row.document_number}
          </Typography>
        </TableCell>
        <TableCell align="center">
          <Typography className={gothamFont.className}>
            {row.version_info}
          </Typography>
        </TableCell>
        <TableCell align="center" sx={{ minWidth: 217 }}>
          <Typography className={gothamFont.className}>
            {row.published_date}
          </Typography>
        </TableCell>
        <TableCell sx={{ minWidth: 110 }} align="center">
          <Typography className={gothamFont.className}>
            {row.notes ? (
              row.notes
            ) : (
              <span style={{ color: '#00000066' }}>No Notes</span>
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
                          src={`/images/apiOptions/${historyRow.type}.svg`}
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
                      <TableCell align="right">
                        <Link
                          href={historyRow.download}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="contained"
                            startIcon={
                              <Image
                                src="/images/download.svg"
                                alt="download icon"
                                width={18}
                                height={18}
                                style={{ color: 'red' }}
                              />
                            }
                          >
                            Download
                          </Button>
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
