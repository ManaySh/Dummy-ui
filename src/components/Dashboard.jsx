import React, { useState, useRef, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Slide from "@mui/material/Slide";

import EditIcon from "@mui/icons-material/DesignServices";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import ForgetPassword from "../screens/ForgetPassword";

import {
  Link,
  Navigate,
  Route,
  useLocation,
  useNavigate,
  Routes,
} from "react-router-dom";
import MainRoutes from "../Routes/MainRoutes";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedListItem, setSelectedListItem] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Check if location exists before using it
  const { pathname } = location || {};

  const isLoginPage = pathname === "/";
  const forgetPassword = pathname === "/forget-password";
  const signUP = pathname === "/sign-up";

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handelDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const handleListItemClick = (text) => {
    setSelectedListItem(text);
  };

  const stylesSidebar = {
    link: {
      textDecoration: "none",
      color: "inherit",
    },
    selectedLink: {
      color: "#673AB7",
      fontWeight: "600",
    },
  };

  const sidebarList = [
    {
      label: "Dialog",
      path: "/advance/dialog-info",
    },
    {
      label: "Alert",
      path: "/advance/alert",
    },
    {
      label: "Pagination",
      path: "/advance/pagination",
    },
    {
      label: "Switches",
      path: "/advance/switches",
    },
    {
      label: "Ratings",
      path: "/advance/ratings",
    },
    {
      label: "Cards",
      path: "/advance/cards",
    },
    {
      label: "UserList",
      path: "/advance/userlist",
    },
    {
      label: "Buttons",
      path: "/advance/buttons",
    },
    {
      label: "checkbox",
      path: "/checkboxes",
     
    },
  ];

  return (
    <div>
      {!isLoginPage && !forgetPassword && !signUP && (
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="fixed" open={open}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                Mini variant drawer
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              {["Default", "Analytics"].map((text, index) => (
                <ListItem key={text} disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            {/* <Divider /> */}
            {/* <List>
              {["All mail", "Trash", "Spam"].map((text, index) => (
                <ListItem key={text} disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List> */}
            <Divider />

            <div
              className="dropdown"
              style={{
                margin: "20px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            >
              <span
                style={{
                  color: "#666",
                  fontWeight: "600",
                  marginTop: "-15px",
                  display: open ? "block" : "none",
                }}
              >
                UI Element
              </span>
              <div
                style={{
                  display: "flex",
                  marginLeft: "-10px",
                  //border: "2px solid maroon",
                  borderRadius: "10px",
                }}
                onClick={handelDropdownClick}
              >
                <IconButton style={{ color: dropdownOpen ? "#673AB7" : "" }}>
                  <EditIcon />
                </IconButton>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "20px",
                    marginLeft: "14px",
                  }}
                >
                  <span
                    style={{
                      color: dropdownOpen ? "#673AB7" : "",
                      fontWeight: dropdownOpen ? "600" : "",
                    }}
                  >
                    Advance
                  </span>
                  <span style={{ fontSize: "10px" }}>
                    8+ Advance components
                  </span>
                </div>
                <IconButton
                  style={{
                    color: dropdownOpen ? "#673AB7" : "",
                    fontWeight: dropdownOpen ? "600" : "",
                  }}
                >
                  {dropdownOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
              </div>

              {dropdownOpen && (
                <List
                  TransitionComponent={Transition}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                  }}
                >
                  {sidebarList.map((text, index) => (
                    <div
                      style={{ paddingLeft: "20px" }}
                      onClick={() => handleListItemClick(text.label)}
                    >
                      <ul
                        key={index}
                        style={{ margin: "6px" }}
                        onClick={onclick}
                      >
                        <Link
                          to={text.path}
                          style={{
                            ...stylesSidebar.link,
                            ...(selectedListItem === text.label &&
                              stylesSidebar.selectedLink),
                          }}
                        >
                          <li>{text.label}</li>
                        </Link>
                      </ul>
                    </div>
                  ))}
                </List>
              )}
            </div>
          </Drawer>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              backgroundColor: "#f0f1f2",
              minHeight: "100vh",
            }}
          >
            <DrawerHeader />
            <MainRoutes />
          </Box>
        </Box>
      )}
      {isLoginPage && <Login />}
      {signUP && <SignUp />}
      {forgetPassword && <ForgetPassword />}
    </div>
  );
}
