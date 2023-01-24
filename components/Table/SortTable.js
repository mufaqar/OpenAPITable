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

const data = [
  {
    name: 'Account management API',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat nulla eu nulla facilisis, ac egestas massa cursus. Quisque vel orci eget est placerat aliquet quis ac ex.',
    documentNumber: 'TMF662',
    release: '21.5.0',
    swaggerVersion: 'v4.1.0',
    publicationDate: '10-Jan-2022',
    odaDomain: 'EngagedParty, Customer',
    options: [
      {
        icon: 'abc',
        name: 'swagger (Apache 2.0 or RAND)',
        version: '12.01.2022',
        download: 'N/A',
      },
      {
        icon: 'abc',
        name: 'API User Guide Specification (RAND)',
        version: '',
        download: true,
      },
      {
        icon: 'abc',
        name: 'Conformance Profile (RAND)',
        version: '12.01.2022',
        download: 'N/A',
      },
      {
        icon: 'abc',
        name: 'CTK',
        version: '12.01.2022',
        download: true,
      },
      {
        icon: 'abc',
        name: 'Sample Implementation Code',
        version: '',
        download: 'N/A',
      },
      {
        icon: 'abc',
        name: 'Postman Collection',
        version: '',
        download: true,
      },
    ],
  },
  {
    name: 'Account management API2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat nulla eu nulla facilisis, ac egestas massa cursus. Quisque vel orci eget est placerat aliquet quis ac ex.',
    documentNumber: 'TMF663',
    release: '21.6.0',
    swaggerVersion: 'v4.1.0.5.',
    publicationDate: '10-Jan-2023',
    odaDomain: 'EngagedParty, Customer',
    options: [
      {
        icon: 'abc',
        name: 'swagger (Apache 2.0 or RAND)',
        version: '12.01.2022',
        download: 'N/A',
      },
      {
        icon: 'abc',
        name: 'API User Guide Specification (RAND)',
        version: '',
        download: true,
      },
      {
        icon: 'abc',
        name: 'Conformance Profile (RAND)',
        version: '12.01.2022',
        download: 'N/A',
      },
      {
        icon: 'abc',
        name: 'CTK',
        version: '12.01.2022',
        download: true,
      },
      {
        icon: 'abc',
        name: 'Sample Implementation Code',
        version: '',
        download: 'N/A',
      },
      {
        icon: 'abc',
        name: 'Postman Collection',
        version: '',
        download: true,
      },
    ],
  },
];

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

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'TM Forum Open APIs',
  },
  {
    id: 'documentNumber',
    numeric: true,
    disablePadding: false,
    label: 'Document number',
  },
  {
    id: 'release',
    numeric: true,
    disablePadding: false,
    label: 'Release',
  },
  {
    id: 'swaggerVersion',
    numeric: true,
    disablePadding: false,
    label: 'Swagger ver.',
  },
  {
    id: 'publicationDate',
    numeric: true,
    disablePadding: false,
    label: 'Publication date',
  },
  {
    id: 'odaDomain',
    numeric: true,
    disablePadding: false,
    label: 'ODA domain',
  },
];

export default function SortTable() {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');

  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };

  const handleRequestSort = (_, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <Box sx={{ maxWidth: '1550px', margin: '0 auto', marginTop: '40px' }}>
      
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                {headCells.map((headCell) => (
                  <TableCell
                    key={headCell.id}
                    padding={headCell.disablePadding ? 'none' : 'normal'}
                    sortDirection={orderBy === headCell.id ? order : false}
                  >
                    <TableSortLabel
                      active={orderBy === headCell.id}
                      direction={orderBy === headCell.id ? order : 'asc'}
                      onClick={createSortHandler(headCell.id)}
                    >
                      {headCell.label}
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
              {stableSort(data, getComparator(order, orderBy)).map((row) => {
                return <Row key={row.name} row={row} />;
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
