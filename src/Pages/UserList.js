import { Link } from "react-router-dom";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import { DataGrid } from '@mui/x-data-grid'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

//custom component imports

import PageHeader from '../components/PageHeader'

import BasicTable from './table/mui/BasicTable'
import DenseTable from "./table/mui/DenseTable";
import StickyHeaderTable from "./table/mui/StickyHeaderTable";
// import CollapsibleTable from "./table/mui/CollapsibleTable";

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

function createData(id, name, calories, fat, carbs, protein) {
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, 'Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData(2, 'Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData(3, 'Eclair', 262, 16.0, 24, 6.0),
  createData(4, 'Cupcake', 305, 3.7, 67, 4.3),
  createData(5, 'Gingerbread', 356, 16.0, 49, 3.9),
];

const columns = [
  { field: 'name', headerName: 'Name', flex: 1 },
  { field: 'calories', headerName: 'Calories', flex: 1 },
  { field: 'fat', headerName: 'Fat', flex: 1 },
  { field: 'carbs', headerName: 'Carbs', flex: 1 },
  { field: 'protein', headerName: 'Protein', flex: 1 },
];

export default function UserList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const [searchText, setSearchText] = useState('');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredRows = rows.filter(row => row.name.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div role="presentation" >
          <Breadcrumbs aria-label="breadcrumb" separator="›" sx={{ fontSize: "15px", fontWeight: "bold" }} >
            <Link style={{ textDecoration: "none", color: "#9370DB" }} to="/userList">Home</Link>
            <Link color="primary" style={{ textDecoration: "none" }} aria-current="page" to="/userList" >UserList</Link>
          </Breadcrumbs>
        </div>
        <div style={{ float: "right", marginBottom: "30px" }}>
          <>
            <div>
              <TextField
                label="Search"
                value={searchText}
                onChange={handleSearchChange}
                variant="outlined"
                size="small"
                InputProps={{
                  startAdornment: (
                    <div>
                      <SearchIcon />
                    </div>
                  ),
                }}
              />
              <Link to="/users/createuser" style={{ marginLeft: "10px" }}>
                <button className="btn btn-outline-danger ">Create User</button>
              </Link>
            </div>
          </>
        </div>
      </div>
      <Grid container spacing={6}>
      <PageHeader
        title={
          <Typography variant='h4'>
            <LinkStyled href='https://mui.com/material-ui/react-table/' target='_blank'>
              MUI Tables
            </LinkStyled>
          </Typography>
        }
        subtitle={
          <Typography sx={{ color: 'text.secondary' }}>
            Tables display sets of data. They can be fully customized
          </Typography>
        }
      />
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Basic Table' />
          <BasicTable />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Dense Table' />
          <DenseTable />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Sticky Header' />
          <StickyHeaderTable />
        </Card>
      </Grid>
      {/* <Grid item xs={12}>
        <Card>
          <CardHeader title='Collapsible Table' />
          <CollapsibleTable/>
        </Card>
      </Grid> */}
      {/* <Grid item xs={12}>
        <Card>
          <CardHeader title='Spanning Table' />
          <TableSpanning />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Customized Table' />
          <TableCustomized />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <TableSortSelect />
        </Card>
      </Grid> */}
    </Grid>
    </>
  );
}
