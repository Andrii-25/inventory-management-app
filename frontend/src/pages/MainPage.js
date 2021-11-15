import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import Header from "../components/Header";
import Table from "../components/Table";
import ModalWindow from "../components/Modal";
import useModalHandlers from "../utils/hooks/useModalHandlers";
import { useState } from "react";
import ConfirmModal from "../components/ConfirmModal/ConfirmModal";

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
  const [modalTitle, setModalTitle] = useState("");
  const classes = useStyles();
  const [isOpenedModal, handleOpenModal, handleCloseModal] = useModalHandlers();
  const [
    isOpenedConfirmModal,
    handleOpenConfirmModal,
    handleCloseConfirmModal,
  ] = useModalHandlers();
  return (
    <>
      <Header />
      <Table />
      <div className={classes.btnWrapper}>
        <AddEditButton
          onClick={() => {
            setModalTitle("Add New Item");
            handleOpenModal();
          }}
        >
          Add
        </AddEditButton>
        <AddEditButton
          onClick={() => {
            setModalTitle("Edit New Item");
            handleOpenModal();
          }}
        >
          Edit
        </AddEditButton>
        <DeleteButton onClick={handleOpenConfirmModal}>Delete</DeleteButton>
        <ModalWindow
          open={isOpenedModal}
          onClose={handleCloseModal}
          title={modalTitle}
        />
        <ConfirmModal
          open={isOpenedConfirmModal}
          onClose={handleCloseConfirmModal}
          title="Are you sure?"
          text="Item will delete permanently."
        />
      </div>
    </>
  );
}
