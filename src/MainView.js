import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import * as dataSet from "./data/dataSet.json";
import { renderDate } from "./helperFunctions";
import { makeStyles } from "@material-ui/core/styles";
import TransitionsModal from './TransitionsModal';

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize:"16px",
    fontWeight:"450",
    color:"gray",
    "&:hover":{
        cursor:"pointer"
    },
  },
  dataGridClass:{
    '&.MuiDataGrid-root .MuiDataGrid-cell:focus': {
        outline: 'none',
    },
  }
}));

//Defining columns
const columns = [
  {
    field: "MaintenanceVendorImageURL",
    headerName: " ",
    sortable: false,
    width: 175,
    align:"center",
    renderCell: (params) => (
      <img
        style={{ maxWidth: "90px" }}
        src={params.formattedValue}
        alt={params.formattedValue}
      />
    ),
  },
  {
    field: "ContractNumber",
    headerName: "CONTRACT NUMBER",
    width: 250,
  },
  {
    field: "NumberOfAssets",
    headerName: "ASSETS",
    width: 250,
  },
  {
    field: "MinimumStartDate",
    headerName: "MINIMUM START DATE",
    type: "date",
    width: 250,
    renderCell: (params) => renderDate(params.formattedValue),
  },
  {
    field: "MaximumEndDate",
    headerName: "MAXIMUM END DATE",
    type: "date",
    width: 250,
    renderCell: (params) => renderDate(params.formattedValue),
  },
];

if (dataSet.dataset) {
  dataSet.dataset.map((entry) => {
    //Adding unique id to each entry
    return (entry.id = entry.ContractNumber);
  });
}

const rows = dataSet.dataset;

const MainView = () => {
  const [pageSize, setPageSize] = React.useState(5);
  const [clickedRow, setClickedRow] = React.useState(null);
  const classes = useStyles()

  const onClickRow = (rowInfo) => {
    setClickedRow(rowInfo.row)
 };

  return (
    <div style={{ height: 400, width: "100%", maxWidth: "1200px" }}>
      <DataGrid
        className={classes.dataGridClass}
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        disableSelectionOnClick
        disableColumnMenu
        onRowClick={(e) => onClickRow(e)}
        getRowClassName={(params)=> classes.root}
        getCellClassName={(params)=> classes.cells}
      />
      <TransitionsModal data={clickedRow} optionalCall={setClickedRow}/>
    </div>
  );
};

export default MainView;
