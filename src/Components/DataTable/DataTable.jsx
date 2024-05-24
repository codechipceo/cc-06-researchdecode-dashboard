import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

const DataTable = ({ rows, columns, handleEdit, handleDelete }) => {
  const [selectionModel, setSelectionModel] = useState([]);

  const actionColumn = {
    field: 'actions',
    headerName: 'Actions',
    width: 150,
    sortable: false,
    renderCell: (params) => (
      <div>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => handleEdit(params.row)}
          style={{ marginRight: 10 }}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={() => handleDelete(params.row._id)}
        >
          Delete
        </Button>
      </div>
    ),
  };

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="w-3/4 h-3/4">
        <DataGrid
          rows={rows}
          columns={[...columns, actionColumn]}
          pageSize={5}
          getRowId={(row) => row._id}
          className="h-full !important"
          checkboxSelection
          selectionModel={selectionModel}
          onSelectionModelChange={(newSelection) => setSelectionModel(newSelection)}
        />
      </div>
    </div>
  );
};

DataTable.propTypes = {
  rows: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default DataTable;