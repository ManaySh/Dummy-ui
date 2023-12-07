// import * as React from "react";
// import { styled, useTheme, alpha } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import MuiDrawer from "@mui/material/Drawer";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import CssBaseline from "@mui/material/CssBaseline";
// import Typography from "@mui/material/Typography";
// import { Divider } from "@mui/material";
// import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
// import { Link, NavLink } from "react-router-dom";
// import LoginInfo from "../screens/LoginInfo";
// import { useLocation } from "react-router-dom";
// import MainRoutes from "../Routes/MainRoutes";
// import Login from "../screens/Login";
// import ForgetPassword from "../screens/ForgetPassword";
// import SignUp from "../screens/SignUp";

// // Icons
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTable } from "@fortawesome/free-solid-svg-icons";
// import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";
// import TextFieldsIcon from "@mui/icons-material/TextFields";
// import ViewDayIcon from "@mui/icons-material/ViewDay";
// import EditAttributesIcon from "@mui/icons-material/EditAttributes";
// import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
// import CheckBoxIcon from "@mui/icons-material/CheckBox";
// import MenuBookIcon from "@mui/icons-material/MenuBook";
// import AlarmAddIcon from "@mui/icons-material/AlarmAdd";
// import AlbumIcon from "@mui/icons-material/Album";
// import FirstPageIcon from "@mui/icons-material/FirstPage";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import {
//   List,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material";
// import logo from "../assets/logo.png";
// import Header from "../../src/Pages/Header/index.js";
// import InputBase from "@mui/material/InputBase";
// import SearchIcon from "@mui/icons-material/Search";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import MailIcon from "@mui/icons-material/Mail";
// const SidebarItems = [
//   {
//     label: "Dialog",
//     path: "/components/dialog-info",
//     icon: <AlbumIcon />,
//   },
//   {
//     label: "Alert",
//     path: "/components/alert",
//     icon: <AlarmAddIcon />,
//   },
//   {
//     label: "Pagination",
//     path: "/components/pagination",
//     icon: <MenuBookIcon />,
//   },
//   {
//     label: "Switches",
//     path: "/components/switches",
//     icon: <EditAttributesIcon />,
//   },
//   {
//     label: "Ratings",
//     path: "/components/ratings",
//     icon: <StarOutlineOutlinedIcon />,
//   },
//   {
//     label: "Cards",
//     path: "/components/cards",
//     icon: <ViewDayIcon />,
//   },
//   {
//     label: "Tables",
//     path: "/components/tables",
//     icon: <FontAwesomeIcon icon={faTable} />,
//   },
//   {
//     label: "Buttons",
//     path: "/components/buttons",
//     icon: <KeyboardCommandKeyIcon />,
//   },
// ];

// const drawerWidth = 220;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: "hidden",
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: "hidden",
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up("sm")]: {
//     width: `calc(${theme.spacing(9)} + 1px)`,
//   },
// });

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-end",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(["width", "margin"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
//   //boxSizing: "border-box",
//   // boxShadow: "none",
// }));

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   ...(open && {
//     ...openedMixin(theme),
//     "& .MuiDrawer-paper": openedMixin(theme),
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     "& .MuiDrawer-paper": closedMixin(theme),
//   }),
// }));

// export default function Sidebar() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);
//   const [componentsOpen, setComponentsOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   const handleComponentsToggle = () => {
//     setComponentsOpen(!componentsOpen);
//   };

//   const location = useLocation();
//   const { pathname } = location;

//   const isLoginPage = pathname === "/";
//   const forgetPassword = pathname === "/forget-password";
//   const signUP = pathname === "/sign-up";

//   return (
//     <div>
//       {!isLoginPage && !forgetPassword && !signUP && (
//         <Box sx={{ display: "flex" }}>
//           <CssBaseline />
//           <AppBar position="fixed" open={open}>
//             {/* <Toolbar>
//               <IconButton
//                 color="inherit"
//                 aria-label="open drawer"
//                 onClick={handleDrawerOpen}
//                 edge="start"
//                 sx={{
//                   marginRight: 5,
//                   ...(open && { display: "none" }),
//                 }}
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Typography variant="h6" noWrap component="div">
//                 Berry
//               </Typography>
//             </Toolbar> */}
//             <Toolbar
//               sx={{
//                 //   background:
//                 //     "linear-gradient(54deg, rgba(255,255,255,1) 33%, rgba(115, 103, 240, 1) 68%, rgb(115,103,240) 100%)",
//                 backgroundColor: "#f2f4f9",
//               }}
//             >
//               <span
//                 style={{
//                   color: "inherit",
//                   cursor: "pointer",
//                   marginRight: 5,
//                   display: open ? "none" : "inline-block",
//                   textAlign: "center",
//                   position: "relative",
//                 }}
//                 onClick={handleDrawerOpen}
//                 aria-label="open drawer"
//               >
//                 <img
//                   src={logo}
//                   alt="logo"
//                   style={{
//                     position: "absolute",
//                     left: "50%",
//                     top: "50%",
//                     transform: "translate(-50%, -50%)",
//                     marginLeft: "7px",
//                     mixBlendMode: "multiply",
//                   }}
//                 />
//               </span>

//               {/* <span
//                 style={{
//                   borderRight: "1px solid #f5f5f5",
//                   height: "50px",
//                   marginLeft: "27px ",
//                   display: open ? "none" : "inline-block",
//                 }}
//               ></span> */}
// <Header />
// <div
//   style={{
//     marginLeft: "auto",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: "20px",
//   }}
// >
//   <MailIcon style={{ color: "#8CA3BA" }} />
//   <NotificationsIcon style={{ color: "#8CA3BA" }} />
//   <LoginInfo />
// </div>
//             </Toolbar>
//           </AppBar>
//           <Drawer variant="permanent" open={open}>
//             <DrawerHeader>
//               <span onClick={handleDrawerClose}>
//                 {theme.direction === "ltr" ? (
//                   <div
//                     style={{
//                       display: "flex",
//                       cursor: "pointer",
//                       justifyContent: "center",
//                       alignItems: "center",
//                     }}
//                   >
//                     <img src={logo} alt="logo" />
//                     <span style={{ marginRight: "120px" }} />
//                     <FirstPageIcon />
//                     <span style={{ marginRight: "8px" }} />
//                     {/* Add more icons here */}
//                   </div>
//                 ) : (
//                   ""
//                 )}
//               </span>
//             </DrawerHeader>
//             <Divider />
//             <List sx={{ height: "100vh" }}>
//               {/* Components menu with dropdown effect */}
//               <div onClick={handleComponentsToggle}>
//                 <ListItemButton
//                   sx={{
//                     minHeight: 48,
//                     justifyContent: open ? "initial" : "center",
//                     px: 2.5,
//                   }}
//                 >
//                   <ListItemIcon
//                     sx={{
//                       minWidth: 0,
//                       mr: open ? 3 : "auto",
//                       justifyContent: "center",
//                       color: "#5F748D",
//                     }}
//                   >
//                     {/* Icon for "Components" menu */}
//                     <PeopleAltIcon />
//                   </ListItemIcon>
//                   <ListItemText
//                     primary="Components"
//                     sx={{
//                       opacity: open ? 10 : 0,
//                       color: "#5F748D",
//                       textDecoration: "none",
//                     }}
//                   />
//                 </ListItemButton>
//               </div>

//               {/* Dropdown menu for "Components" */}
//               {pathname.startsWith("/components") && componentsOpen && (
//                 <div>
//                   {SidebarItems.map((item) => (
//                     <div key={item.label}>
//                       <Link
//                         to={item.path}
//                         disablePadding
//                         sx={{ display: "block" }}
//                         style={{
//                           textDecoration: "none",
//                         }}
//                       >
//                         <ListItemButton
//                           sx={{
//                             minHeight: 48,
//                             justifyContent: open ? "initial" : "center",
//                             px: 4.5, // Adjust padding for dropdown items

//                             display: "flex",
//                             backgroundColor:
//                               pathname === item.path
//                                 ? "#F2F9FE"
//                                 : "transparent",
//                           }}
//                         >
//                           <ListItemIcon
//                             sx={{
//                               minWidth: 0,
//                               mr: open ? 3 : "auto",
//                               justifyContent: "center",
//                               //color: "#8CA3BA",

//                               color:
//                                 pathname === item.path ? "#2499EF" : "#5F748D",
//                             }}
//                           >
//                             {item.icon}
//                           </ListItemIcon>
//                           <ListItemText
//                             primary={item.label}
//                             sx={{
//                               opacity: open ? 10 : 0,
//                               color: "#8CA3BA",
//                               textDecoration: "none",
//                               color:
//                                 pathname === item.path ? "#2499EF" : "#5F748D",
//                               fontWeight: "600",
//                             }}
//                           />
//                         </ListItemButton>
//                       </Link>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </List>
//             <Divider />
//           </Drawer>

//           <Box
//             component="main"
//             sx={{
//               flexGrow: 1,
//               p: 3,
//               backgroundColor: "#f2f4f9",
//               minHeight: "100vh",
//             }}
//           >
//             <DrawerHeader />
//             <MainRoutes />
//           </Box>
//         </Box>
//       )}
//       {isLoginPage && <Login />}
//       {signUP && <SignUp />}
//       {forgetPassword && <ForgetPassword />}
//     </div>
//   );
// }
import * as React from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Link, NavLink } from "react-router-dom";
import LoginInfo from "../screens/LoginInfo";
import { useLocation } from "react-router-dom";
import MainRoutes from "../Routes/MainRoutes";
import Login from "../screens/Login";
import ForgetPassword from "../screens/ForgetPassword";
import SignUp from "../screens/SignUp";
import ListItem from "@mui/material/ListItem";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable } from "@fortawesome/free-solid-svg-icons";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import ViewDayIcon from "@mui/icons-material/ViewDay";
import EditAttributesIcon from "@mui/icons-material/EditAttributes";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AlarmAddIcon from "@mui/icons-material/AlarmAdd";
import AlbumIcon from "@mui/icons-material/Album";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddchartIcon from "@mui/icons-material/Addchart";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import logo from "../assets/logo.png";
import Header from "../../src/Pages/Header/index.js";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";
const SidebarItems = [
  {
    label: "Alert",
    path: "/components/alert",
    icon: <AlarmAddIcon />,
  },
  {
    label: "Charts",
    path: "/components/charts",
    icon: <AddchartIcon />,
  },
  {
    label: "Dialog",
    path: "/components/dialog-info",
    icon: <AlbumIcon />,
  },
  {
    label: "Pagination",
    path: "/components/pagination",
    icon: <MenuBookIcon />,
  },
  {
    label: "Switches",
    path: "/components/switches",
    icon: <EditAttributesIcon />,
  },
  {
    label: "Ratings",
    path: "/components/ratings",
    icon: <StarOutlineOutlinedIcon />,
  },
  {
    label: "Cards",
    path: "/components/cards",
    icon: <ViewDayIcon />,
  },
  {
    label: "Tables",
    path: "/components/tables",
    icon: <FontAwesomeIcon icon={faTable} />,
  },
  {
    label: "Buttons",
    path: "/components/buttons",
    icon: <KeyboardCommandKeyIcon />,
  },
  {
    label: "Progress",
    path: "/components/progress",
    icon: <RestartAltIcon/>
  },
  {
    label: "checkbox",
    path: "/components/checkboxes",
    icon: <CheckCircleIcon/>
   
  },
];

const drawerWidth = 220;

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
    width: `calc(${theme.spacing(9)} + 1px)`,
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
  boxSizing: "border-box",
  boxShadow: "none",
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

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [componentsOpen, setComponentsOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleComponentsToggle = () => {
    setComponentsOpen(!componentsOpen);
  };

  const location = useLocation();
  const { pathname } = location;

  const isLoginPage = pathname === "/";
  const forgetPassword = pathname === "/forget-password";
  const signUP = pathname === "/sign-up";

  return (
    <div>
      {!isLoginPage && !forgetPassword && !signUP && (
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="fixed" open={open}>
            <Toolbar
              sx={{
                background:
                  "linear-gradient(54deg, rgba(255,255,255,1) 33%, rgba(115, 103, 240, 1) 68%, rgb(115,103,240) 100%)",
                //backgroundColor: "#f2f4f9",
              }}
            >
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
                <img
                  src={logo}
                  alt="logo"
                  style={{
                    //   position: "absolute",
                    //   left: "50%",
                    //   top: "50%",
                    //   transform: "translate(-50%, -50%)",
                    //   marginLeft: "7px",
                    mixBlendMode: "multiply",
                  }}
                />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                style={{
                  color: "#2499EF",
                  fontWeight: "600",
                  marginLeft: "15px",
                }}
              >
                Berry
              </Typography>
              <Header />
              <div
                style={{
                  marginLeft: "auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <MailIcon style={{ color: "#673AB7" }} />
                <NotificationsIcon style={{ color: "#673AB7" }} />
                <LoginInfo />
              </div>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <DrawerHeader>
              <span onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <div
                    style={{
                      display: "flex",
                      cursor: "pointer",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={logo} alt="logo" />
                    <span style={{ marginRight: "120px" }} />
                    <FirstPageIcon />
                    <span style={{ marginRight: "8px" }} />
                    {/* Add more icons here */}
                  </div>
                ) : (
                  ""
                )}
              </span>
            </DrawerHeader>
            <Divider />
            <List sx={{ height: "100vh" }}>
              {/* Components menu with dropdown effect */}
              <div onClick={handleComponentsToggle}>
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
                      color: "#5F748D",
                    }}
                  >
                    {/* Icon for "Components" menu */}
                    <MicrosoftIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Components"
                    sx={{
                      opacity: open ? 10 : 0,
                      color: "#5F748D",
                      textDecoration: "none",
                    }}
                  />
                  {componentsOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItemButton>
              </div>

              {/* Dropdown menu for "Components" */}
              {/* {pathname.startsWith("/components") && componentsOpen && ( */}
              { componentsOpen && (
                <div>
                  {SidebarItems.map((item) => (
                    <div key={item.label}>
                      <Link
                        to={item.path}
                        disablePadding
                        sx={{ display: "block" }}
                        style={{
                          textDecoration: "none",
                        }}
                      >
                        <ListItemButton
                          sx={{
                            minHeight: 48,
                            justifyContent: open ? "initial" : "center",
                            px: 4.5, // Adjust padding for dropdown items

                            display: "flex",
                            backgroundColor:
                              pathname === item.path
                                ? "#F2F9FE"
                                : "transparent",
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: 0,
                              mr: open ? 3 : "auto",
                              justifyContent: "center",
                              //color: "#8CA3BA",

                              color:
                                pathname === item.path ? "#2499EF" : "#5F748D",
                            }}
                          >
                            {item.icon}
                          </ListItemIcon>
                          <ListItemText
                            primary={item.label}
                            sx={{
                              opacity: open ? 10 : 0,
                              color: "#8CA3BA",
                              textDecoration: "none",
                              color:
                                pathname === item.path ? "#2499EF" : "#5F748D",
                              fontWeight: "600",
                            }}
                          />
                        </ListItemButton>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </List>
            <Divider />
          </Drawer>

          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              backgroundColor: "#EEF2F6",
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
