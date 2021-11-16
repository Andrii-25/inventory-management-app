import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { forwardRef, useState } from "react";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ErrorSnackbar({ text }) {
  const [opened, setOpened] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpened(false);
  };

  return (
    <Snackbar
      open={opened}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      sx={{ width: "700px" }}
    >
      <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
        {text}
      </Alert>
    </Snackbar>
  );
}
