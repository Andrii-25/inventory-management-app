import { DataGrid } from "@mui/x-data-grid";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../actions/item";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { setSelectedItems } from "../actions/selectedItems";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiDataGrid-columnHeaderCheckbox .MuiDataGrid-columnHeaderTitleContainer":
      {
        display: "none",
      },
    "&.MuiDataGrid-root .MuiDataGrid-cell:focus": {
      outline: "none",
    },
  },
  wrapper: {
    width: "90%",
    margin: "5% 0 0 5%",
  },
}));

const columns = [
  { field: "id", headerName: "ID", width: 230, sortable: false },
  { field: "category", headerName: "Category", width: 230, sortable: false },
  { field: "brand", headerName: "Brand", width: 230, sortable: false },
  {
    field: "model",
    headerName: "Model",
    width: 230,
    sortable: false,
  },
  {
    field: "price",
    headerName: "Price",
    width: 230,
    sortable: false,
  },
];

export default function Table({ itemData }) {
  const classes = useStyles();

  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const selectedItems = useSelector((state) => state.selectedItems);

  useEffect(async () => {
    try {
      await dispatch(getItems());
    } catch (error) {
      console.log(error);
    }
  }, []);

  function handleSelect(selection) {
    if (selection.length > 1) {
      const selectionSet = new Set(selectedItems);
      const result = selection.filter((s) => !selectionSet.has(s));
      dispatch(setSelectedItems(result));
      const editedItem = itemData.find((i) => i.id === selectedItems[0]);
      console.log({ ...editedItem });
    } else {
      dispatch(setSelectedItems(selection));
    }
  }

  return (
    <Box className={classes.wrapper}>
      <DataGrid
        className={classes.root}
        rows={itemData}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        hideFooter
        autoHeight
        autoPageSize
        disableColumnMenu
        density="comfortable"
        onSelectionModelChange={(selection) => handleSelect(selection)}
        selectionModel={selectedItems}
        disableSelectionOnClick
      />
    </Box>
  );
}
