import { useState } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import Row from './Row';
import { headCells } from './consts';
import { Typography } from '@mui/material';
import { gothamFont } from '../../helpers/gothamFont';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function SortTable(props) {
  const { data, historic = false } = props;
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('api_name');

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <Box sx={{ maxWidth: '1550px', margin: '0 auto', marginTop: '40px' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table>
            <TableHead stickyHeader>
              <TableRow sx={{ background: '#F8F9F9' }}>
                <TableCell />
                {headCells.map((headCell) => (
                  <TableCell
                    key={headCell.id}
                    padding={headCell.disablePadding ? 'none' : 'normal'}
                    sortDirection={orderBy === headCell.id ? order : false}
                    align={headCell.align}
                    sx={{
                      textAlign: headCell.align,
                      margin: 'auto',
                    }}
                  >
                    <TableSortLabel
                      active={orderBy === headCell.id}
                      direction={orderBy === headCell.id ? order : 'asc'}
                      onClick={() => handleRequestSort(headCell.id)}
                      IconComponent={ExpandMoreIcon}
                    >
                      <span
                        className={gothamFont.className}
                        style={{
                          fontStyle: 'normal',
                          fontWeight: headCell.fontWeight,
                          marginLeft: '25px',
                          fontSize: headCell.fontSize,
                        }}
                      >
                        {headCell.label}
                      </span>
                      {orderBy === headCell.id ? (
                        <Box component="span" sx={visuallyHidden}>
                          {order === 'desc'
                            ? 'sorted descending'
                            : 'sorted ascending'}
                        </Box>
                      ) : null}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {stableSort(data, getComparator(order, orderBy)).map((row, i) => {
                return <Row key={i} row={row} historic={historic} />;
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
