import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{ height: "77px", backgroundColor: "#2ba382" }}
    >
      <Typography
        variant="h6"
        position="absolute"
        sx={{ float: "left", margin: "20px 0 0 27px" }}
      >
        Inventory Management
      </Typography>
    </AppBar>
  );
}
