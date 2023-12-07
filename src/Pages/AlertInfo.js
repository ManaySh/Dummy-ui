// import React from "react";
// import {
//   Box,
//   Breadcrumbs,
//   Button,
//   Card,
//   CardActions,
//   CardContent,
//   Divider,
//   Grid,
//   Typography,
// } from "@mui/material";
// import Alert from "@mui/material/Alert";
// import Stack from "@mui/material/Stack";
// import CheckIcon from "@mui/icons-material/Check";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import { Link } from "react-router-dom";

// function AlertInfo() {
//   const cardAlert = (
//     <React.Fragment>
//       <CardContent>
//         <Typography
//           variant="h3"
//           component="div"
//           sx={{ fontSize: 14, fontWeight: "600" }}
//           color="text.secondary"
//         >
//           Basic
//         </Typography>
//       </CardContent>
//       <Divider />
//       <CardActions>
//         <Stack sx={{ width: "100%" }} spacing={2}>
//           <Alert severity="error">This is an error alert — check it out!</Alert>
//           <Alert severity="warning">
//             This is a warning alert — check it out!
//           </Alert>
//           <Alert severity="info">This is an info alert — check it out!</Alert>
//           <Alert severity="success">
//             This is a success alert — check it out!
//           </Alert>
//         </Stack>
//       </CardActions>
//     </React.Fragment>
//   );
//   const cardAlertActions = (
//     <React.Fragment>
//       <CardContent>
//         <Typography
//           variant="h3"
//           component="div"
//           sx={{ fontSize: 14, fontWeight: "600" }}
//           color="text.secondary"
//         >
//           Alert With Actions
//         </Typography>
//       </CardContent>
//       <Divider />
//       <CardActions>
//         <Stack sx={{ width: "100%" }} spacing={2}>
//           <Alert onClose={() => {}}>
//             This is a success alert — check it out!
//           </Alert>
//           <Alert
//             action={
//               <Button color="inherit" size="small">
//                 UNDO
//               </Button>
//             }
//           >
//             This is a success alert — check it out!
//           </Alert>
//         </Stack>
//       </CardActions>
//     </React.Fragment>
//   );
//   const cardAlertOutline = (
//     <React.Fragment>
//       <CardContent>
//         <Typography
//           variant="h3"
//           component="div"
//           sx={{ fontSize: 14, fontWeight: "600" }}
//           color="text.secondary"
//         >
//           Alert With Icons
//         </Typography>
//       </CardContent>
//       <Divider />
//       <CardActions>
//         <Stack sx={{ width: "100%" }} spacing={2}>
//           <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
//             This is a success alert — check it out!
//           </Alert>
//           <Alert
//             iconMapping={{
//               success: <CheckCircleOutlineIcon fontSize="inherit" />,
//             }}
//           >
//             This is a success alert — check it out!
//           </Alert>
//           <Alert icon={false} severity="success">
//             This is a success alert — check it out!
//           </Alert>
//         </Stack>
//       </CardActions>
//     </React.Fragment>
//   );
//   const cardAlertIcons = (
//     <React.Fragment>
//       <CardContent>
//         <Typography
//           variant="h3"
//           component="div"
//           sx={{ fontSize: 14, fontWeight: "600" }}
//           color="text.secondary"
//         >
//           Alert With Outlined
//         </Typography>
//       </CardContent>
//       <Divider />
//       <CardActions>
//         <Stack sx={{ width: "100%" }} spacing={2}>
//           <Alert variant="outlined" severity="error">
//             This is an error alert — check it out!
//           </Alert>
//           <Alert variant="outlined" severity="warning">
//             This is a warning alert — check it out!
//           </Alert>
//           <Alert variant="outlined" severity="info">
//             This is an info alert — check it out!
//           </Alert>
//           <Alert variant="outlined" severity="success">
//             This is a success alert — check it out!
//           </Alert>
//         </Stack>
//       </CardActions>
//     </React.Fragment>
//   );
//   const cardAlertFilled = (
//     <React.Fragment>
//       <CardContent>
//         <Typography
//           variant="h3"
//           component="div"
//           sx={{ fontSize: 14, fontWeight: "600" }}
//           color="text.secondary"
//         >
//           Alert With Filled
//         </Typography>
//       </CardContent>
//       <Divider />
//       <CardActions>
//         <Stack sx={{ width: "100%" }} spacing={2}>
//           <Alert variant="filled" severity="error">
//             This is an error alert — check it out!
//           </Alert>
//           <Alert variant="filled" severity="warning">
//             This is a warning alert — check it out!
//           </Alert>
//           <Alert variant="filled" severity="info">
//             This is an info alert — check it out!
//           </Alert>
//           <Alert variant="filled" severity="success">
//             This is a success alert — check it out!
//           </Alert>
//         </Stack>
//       </CardActions>
//     </React.Fragment>
//   );
//   const cardAlertToast = (
//     <React.Fragment>
//       <CardContent>
//         <Typography
//           variant="h3"
//           component="div"
//           sx={{ fontSize: 14, fontWeight: "600" }}
//           color="text.secondary"
//         >
//           Alert With Toast
//         </Typography>
//       </CardContent>
//       <Divider />
//       <CardActions>
//         <Alert severity="success" color="info" style={{ width: "100%" }}>
//           This is a success alert — check it out!
//         </Alert>
//       </CardActions>
//     </React.Fragment>
//   );

//   return (
//     <div>
//       <div role="presentation">
//         <Breadcrumbs
//           aria-label="breadcrumb"
//           separator="›"
//           sx={{ fontSize: "15px", fontWeight: "bold", marginLeft: "17px" }}
//         >
//           <Link
//             style={{ textDecoration: "none", color: "#9370DB" }}
//             to="/components/alert"
//           >
//             Home
//           </Link>
//           <Link
//             color="primary"
//             style={{ textDecoration: "none" }}
//             aria-current="page"
//             to="/components/alert"
//           >
//             Alert
//           </Link>
//         </Breadcrumbs>
//       </div>
//       <div
//       // style={{
//       //   backgroundColor: "#FFFFFF",
//       //   minHeight: "100vh",
//       //   borderRadius: "10px",
//       // }}
//       >
//         <div style={{ fontSize: "20px", fontWeight: "600", padding: "20px" }}>
//           Alert
//         </div>
//         <Divider />
//         <Box sx={{ width: "100%", padding: "20px" }}>
//           <Grid
//             container
//             rowSpacing={2}
//             columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//           >
//             <Grid item xs={12}>
//               <Box sx={{ minWidth: 275 }}>
//                 <Card variant="outlined">{cardAlert}</Card>
//               </Box>
//             </Grid>
//             <Grid item xs={12}>
//               <Box sx={{ minWidth: 275 }}>
//                 <Card variant="outlined">{cardAlertActions}</Card>
//               </Box>
//             </Grid>
//             <Grid item xs={12}>
//               <Box sx={{ minWidth: 275 }}>
//                 <Card variant="outlined">{cardAlertIcons}</Card>
//               </Box>
//             </Grid>
//             <Grid item xs={12}>
//               <Box sx={{ minWidth: 275 }}>
//                 <Card variant="outlined">{cardAlertOutline}</Card>
//               </Box>
//             </Grid>
//             <Grid item xs={12}>
//               <Box sx={{ minWidth: 275 }}>
//                 <Card variant="outlined">{cardAlertFilled}</Card>
//               </Box>
//             </Grid>
//             <Grid item xs={12}>
//               <Box sx={{ minWidth: 275 }}>
//                 <Card variant="outlined">{cardAlertToast}</Card>
//               </Box>
//             </Grid>
//           </Grid>
//         </Box>
//       </div>
//     </div>
//   );
// }

// export default AlertInfo;
