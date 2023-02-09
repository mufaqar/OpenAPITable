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
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Link from 'next/link';
import { removeHtmlTags } from '../../helpers/removeHtmlTags';
import { transformToFullName } from '../../helpers/transformToFullName';
import Image from 'next/image';

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
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            sx={{
              borderTopLeftRadius: '10px',
              borderBottomLeftRadius: '10px',
            }}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <Typography variant="h6">{row.api_name} </Typography>
              {historic && (
                <Typography
                  variant="body1"
                  color="error"
                  sx={{ fontWeight: 'bold', fontStyle: 'italic' }}
                >
                  [Historic]
                </Typography>
              )}
            </Box>
            <Box>
              <Typography>{removeHtmlTags(row.api_description)}</Typography>
            </Box>
          </Box>
        </TableCell>
        <TableCell>
          <Typography>{row.document_number}</Typography>
        </TableCell>
        <TableCell>
          <Typography>{row.release_info}</Typography>
        </TableCell>
        <TableCell>
          <Typography>{row.version_info}</Typography>
        </TableCell>
        <TableCell>
          <Typography>{row.published_date}</Typography>
        </TableCell>
        <TableCell>
          <Typography>{row.context}</Typography>
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
                      <TableCell>
                        <Image
                          src={`/images/options/${historyRow.type}.jpg`}
                          width={24}
                          height={24}
                          alt="logo"
                          style={{ objectFit: 'cover' }}
                        />
                      </TableCell>
                      <TableCell>
                        {transformToFullName(historyRow.type)}
                      </TableCell>
                      <TableCell>{historyRow.name}</TableCell>
                      <TableCell>{historyRow.version}</TableCell>
                      <TableCell>
                        <Link
                          href={historyRow.download}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="contained">Download</Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                  {/* <TableRow>
                    <TableCell align="center" colSpan={5}>
                      <Button variant="contained">Download all</Button>
                    </TableCell>
                  </TableRow> */}
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
