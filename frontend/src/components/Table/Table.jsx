import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../actions/item";

const useStyles = makeStyles({
  wrapper: {
    width: "90%",
    margin: "5% 0 0 5%",
  },
});

const columns = [
  { field: "id", headerName: "ID", width: 150, sortable: false },
  { field: "category", headerName: "Category", width: 250, sortable: false },
  { field: "brand", headerName: "Brand", width: 250, sortable: false },
  {
    field: "model",
    headerName: "Model",
    width: 250,
    sortable: false,
  },
  {
    field: "price",
    headerName: "Price",
    width: 270,
    sortable: false,
  },
];

export default function Table() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  React.useEffect(async () => {
    try {
      await dispatch(getItems());
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className={classes.wrapper}>
      <DataGrid
        rows={items}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        hideFooter
        autoHeight
        autoPageSize
        disableColumnMenu
        density="comfortable"
      />
    </div>
  );
}
