import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import Header from "../components/Header";
import Table from "../components/Table";

const useStyles = makeStyles({
  btnWrapper: {
    width: "90%",
    margin: "27px 0 0 5%",
    display: "flex",
    justifyContent: "right",
  },
});

const AddEditButton = styled(Button)(() => ({
  width: "134px",
  height: "37px",
  color: "white",
  marginRight: "24px",
  backgroundColor: "#2BA382",
  "&:hover": {
    backgroundColor: "none",
    border: "2px solid #2BA382",
    color: "#2BA382",
    transitionDuration: "0.5s",
  },
}));

const DeleteButton = styled(Button)(() => ({
  width: "134px",
  height: "37px",
  color: "white",
  backgroundColor: "#D25F5F",
  "&:hover": {
    backgroundColor: "none",
    border: "2px solid #D25F5F",
    color: "#D25F5F",
    transitionDuration: "0.5s",
  },
}));

export default function MainPage() {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Table />
      <div className={classes.btnWrapper}>
        <AddEditButton>Add</AddEditButton>
        <AddEditButton>Edit</AddEditButton>
        <DeleteButton>Delete</DeleteButton>
      </div>
    </>
  );
}