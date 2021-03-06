import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import useModalHandlers from "../utils/hooks/useModalHandlers";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, updateItem, removeItem, getItems } from "../actions/item";
import Header from "../components/Header";
import Table from "../components/Table";
import ModalWindow from "../components/ModalWindow";
import ConfirmModal from "../components/ConfirmModal";
import ErrorSnackbar from "../components/ErrorSnackbar";

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
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const selectedItems = useSelector((state) => state.selectedItems);

  const items = useSelector((state) => state.items);

  function getEditedItem() {
    if (items.length > 0) {
      return items.find((i) => i.id === selectedItems[0]);
    }
  }

  const [item, setItem] = useState({});

  useEffect(async () => {
    try {
      await dispatch(getItems());
    } catch (error) {
      console.log(error);
    }
  }, [items]);

  const classes = useStyles();

  const [isOpenedModal, handleOpenModal, handleCloseModal] = useModalHandlers();
  const [isOpenedEditModal, handleOpenEditModal, handleCloseEditModal] =
    useModalHandlers();

  const [
    isOpenedConfirmModal,
    handleOpenConfirmModal,
    handleCloseConfirmModal,
  ] = useModalHandlers();

  async function handleDelete() {
    try {
      setLoading(true);
      await dispatch(removeItem(selectedItems[0]));
      window.location.reload();
    } catch (err) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    } finally {
      setLoading(false);
    }
  }

  function handleChange(e) {
    const { target } = e;
    const { value, name } = target;
    let i = { ...item };
    i[name] = value;
    setItem(i);
  }

  async function handleSubmit(event) {
    try {
      setLoading(true);
      event.preventDefault();
      const res = await dispatch(addItem(item));
      console.log(res);
    } catch (err) {
      console.log(err);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    } finally {
      setLoading(false);
      handleCloseModal();
      setItem({});
    }
  }

  async function handleSubmitEdit(event) {
    try {
      setLoading(true);
      event.preventDefault();
      await dispatch(updateItem(item, selectedItems[0]));
    } catch (err) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    } finally {
      setLoading(false);
      handleCloseEditModal();
      setItem({});
    }
  }

  return (
    <>
      <Header />
      <Table itemData={items} />
      <div className={classes.btnWrapper}>
        <AddEditButton
          disabled={selectedItems[0] ? true : false}
          onClick={() => {
            setModalTitle("Add New Item");
            handleOpenModal();
          }}
        >
          Add
        </AddEditButton>
        <AddEditButton
          disabled={selectedItems[0] ? false : true}
          onClick={() => {
            setModalTitle("Edit New Item");
            handleOpenEditModal();
          }}
        >
          Edit
        </AddEditButton>
        <DeleteButton
          disabled={selectedItems[0] ? false : true}
          onClick={handleOpenConfirmModal}
        >
          Delete
        </DeleteButton>
        <ModalWindow
          open={isOpenedModal}
          onClose={handleCloseModal}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          title={modalTitle}
          data={item}
          isLoading={isLoading}
        />
        <ModalWindow
          open={isOpenedEditModal}
          onClose={handleCloseEditModal}
          handleChange={handleChange}
          handleSubmit={handleSubmitEdit}
          title={modalTitle}
          data={getEditedItem()}
          isLoading={isLoading}
        />
        <ConfirmModal
          open={isOpenedConfirmModal}
          onClose={handleCloseConfirmModal}
          title="Are you sure?"
          text="Item will delete permanently."
          onDelete={handleDelete}
          isLoading={isLoading}
        />
        {error ? (
          <ErrorSnackbar open={true} text={"Something went wrong!"} />
        ) : null}
      </div>
    </>
  );
}
