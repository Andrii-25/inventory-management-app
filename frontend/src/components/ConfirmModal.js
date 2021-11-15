import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const modalBody = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "638px",
  minHeight: "187px",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

const textWrapper = {
  width: "100%",
  marginTop: "3%",
};

const btnWrapper = {
  width: "100%",
  marginTop: "10%",
  display: "flex",
  justifyContent: "end",
};

const DeleteButton = styled(Button)(() => ({
  width: "134px",
  height: "37px",
  color: "white",
  marginRight: "24px",
  backgroundColor: "#D25F5F",
  "&:hover": {
    backgroundColor: "none",
    border: "2px solid #D25F5F",
    color: "#D25F5F",
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

export default function ConfirmModal({ open, onClose, onClick, title, text }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalBody}>
        <Typography component="h2" variant="h6">
          {title}
        </Typography>
        <Box sx={textWrapper}>
          <Typography paragraph variant="subtitle1">
            {text}
          </Typography>
        </Box>
        <Box sx={btnWrapper}>
          <DeleteButton>DELETE</DeleteButton>
          <CancelButton onClick={onClose}>CANCEL</CancelButton>
        </Box>
      </Box>
    </Modal>
  );
}
