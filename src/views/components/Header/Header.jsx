import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  Divider,
  IconButton,
  InputAdornment,
  InputBase,
  Paper,
  TextField,
} from "@mui/material";
import DirectionsIcon from "@mui/icons-material/Directions";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <Paper
      component="form"
      sx={{
        //p: "2px 4px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 300,
        marginLeft: "200px",
        boxSizing: "border-box",
        boxShadow: "none",
      }}
    >
      {/* <IconButton sx={{ p: "10px" }} aria-label="menu">
        <MenuIcon />
      </IconButton> */}
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="search components"
        inputProps={{ "aria-label": "search components" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default Header;
