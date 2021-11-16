import {
  Box,
  Modal,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { styled } from "@mui/material/styles";

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

const DeleteButton = styled(LoadingButton)(() => ({
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

export default function ConfirmModal({
  open,
  onClose,
  onDelete,
  title,
  text,
  isLoading,
}) {
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
          <DeleteButton
            onClick={() => onDelete()}
            loading={isLoading}
            loadingIndicator={
              <>
                <CircularProgress
                  size={15}
                  sx={{
                    color: "white",
                    margin: "4px 7px 0 0",
                  }}
                />
                <Typography sx={{ color: "white" }}>Deleting...</Typography>
              </>
            }
            type="submit"
          >
            {isLoading ? null : "DELETE"}
          </DeleteButton>
          <CancelButton onClick={onClose}>CANCEL</CancelButton>
        </Box>
      </Box>
    </Modal>
  );
}
