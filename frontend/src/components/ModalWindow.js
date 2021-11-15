import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const modalBody = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "638px",
  minHeight: "401px",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

const textField = {
  width: "90%",
  margin: "5% 0 0 5%",
};

const btnWrapper = {
  width: "581px",
  margin: "40px 0 0 24px",
  display: "flex",
  justifyContent: "end",
};

const SubmitButton = styled(Button)(() => ({
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

const CancelButton = styled(Button)(() => ({
  width: "134px",
  height: "37px",
  color: "white",
  backgroundColor: "#828A88",
  "&:hover": {
    backgroundColor: "none",
    border: "2px solid #828A88",
    color: "#828A88",
    transitionDuration: "0.5s",
  },
}));

export default function ModalWindow({
  open,
  onClose,
  title,
  handleSubmit,
  handleChange,
}) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalBody}>
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        <TextField sx={textField} label="Category" variant="standard" />
        <TextField sx={textField} label="Brand" variant="standard" />
        <TextField sx={textField} label="Model" variant="standard" />
        <TextField sx={textField} label="Price" variant="standard" />
        <Box sx={btnWrapper}>
          <SubmitButton>ADD</SubmitButton>
          <CancelButton onClick={onClose}>CANCEL</CancelButton>
        </Box>
      </Box>
    </Modal>
  );
}
