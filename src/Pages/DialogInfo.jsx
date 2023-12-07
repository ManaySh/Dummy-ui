// import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import Grid from "@mui/material/Grid";
// import Slide from "@mui/material/Slide";
// import Paper from "@mui/material/Paper";
// import Draggable from "react-draggable";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";
// import { styled } from "@mui/material/styles";
// import ListItemText from "@mui/material/ListItemText";
// import ListItem from "@mui/material/ListItem";
// import List from "@mui/material/List";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import { useEffect } from "react";
// import { Breadcrumbs } from "@mui/material";
// import { Link } from "react-router-dom";

// function DialogInfo() {
//   const [simpleDialogOpen, setSimpleDialogOpen] = useState(false);
//   const [slideDialogOpen, setSlideDialogOpen] = useState(false);
//   const [draggableDialogOpen, setDraggableDialogOpen] = useState(false);
//   const [dialogBootstrap, seDialogBootstrap] = useState(false);
//   const [transitionDialog, setTransitionDialog] = useState(false);
//   const [scrollableDialog, setScrollableDialog] = useState(false);
//   const [scroll, setScroll] = React.useState("paper");

//   const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
//   });

//   function PaperComponent(props) {
//     return (
//       <Draggable
//         handle="#draggable-dialog-title"
//         cancel={'[class*="MuiDialogContent-root"]'}
//       >
//         <Paper {...props} />
//       </Draggable>
//     );
//   }
//   const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//     "& .MuiDialogContent-root": {
//       padding: theme.spacing(2),
//     },
//     "& .MuiDialogActions-root": {
//       padding: theme.spacing(1),
//     },
//   }));

//   const handleClickOpen = () => {
//     setSimpleDialogOpen(true);
//   };
//   const handleClose = () => {
//     setSimpleDialogOpen(false);
//   };

//   const handleSlideDialogOpen = () => {
//     setSlideDialogOpen(true);
//   };
//   const handleSlideDialogClose = () => {
//     setSlideDialogOpen(false);
//   };

//   const handleDraggableDialogOpen = () => {
//     setDraggableDialogOpen(true);
//   };
//   const handleDraggableDialogClose = () => {
//     setDraggableDialogOpen(false);
//   };
//   const handlebootstrapDialogOpen = () => {
//     seDialogBootstrap(true);
//   };
//   const handlebootstrapDialogClose = () => {
//     seDialogBootstrap(false);
//   };

//   const handleOpenTransitionClick = () => {
//     setTransitionDialog(true);
//   };
//   const handleClodeTransitionClick = () => {
//     setTransitionDialog(false);
//   };

//   const handleOpenScrollableClick = (scrollType) => {
//     setScroll(scrollType);
//     setScrollableDialog(true);
//   };
//   const handleClsoeScrollableClick = (scrollType) => {
//     setScrollableDialog(false);
//   };
//   const descriptionElementRef = React.useRef(null);
//   React.useEffect(() => {
//     if (scrollableDialog) {
//       const { current: descriptionElement } = descriptionElementRef;
//       if (descriptionElement !== null) {
//         descriptionElement.focus();
//       }
//     }
//   }, [scrollableDialog]);

//   const card = (
//     <React.Fragment>
//       <CardContent>
//         <Typography
//           variant="h3"
//           component="div"
//           sx={{ fontSize: 14, fontWeight: "600" }}
//           color="text.secondary"
//         >
//           Simple Dialog
//         </Typography>
//       </CardContent>
//       <Divider />
//       <CardActions
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "100px",
//         }}
//       >
//         <Button variant="contained" onClick={handleClickOpen}>
//           Simple alert dialog
//         </Button>
//         <Dialog
//           open={simpleDialogOpen}
//           onClose={handleClose}
//           aria-labelledby="alert-dialog-title"
//           aria-describedby="alert-dialog-description"
//         >
//           <DialogTitle id="alert-dialog-title">
//             {"Use Google's location service?"}
//           </DialogTitle>
//           <DialogContent>
//             <DialogContentText id="alert-dialog-description">
//               Let Google help apps determine location. This means sending
//               anonymous location data to Google, even when no apps are running.
//             </DialogContentText>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleClose}>Disagree</Button>
//             <Button onClick={handleClose} autoFocus>
//               Agree
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </CardActions>
//     </React.Fragment>
//   );

//   const cardSlide = (
//     <React.Fragment>
//       <CardContent>
//         <Typography
//           variant="h3"
//           component="div"
//           sx={{ fontSize: 14, fontWeight: "600" }}
//           color="text.secondary"
//         >
//           Open Slide Alert Dialog
//         </Typography>
//       </CardContent>
//       <Divider />
//       <CardActions
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "100px",
//         }}
//       >
//         <Button variant="outlined" onClick={handleSlideDialogOpen}>
//           Slide alert dialog
//         </Button>
//         <Dialog
//           open={slideDialogOpen}
//           onClose={handleSlideDialogClose}
//           TransitionComponent={Transition}
//           aria-labelledby="alert-dialog-title"
//           aria-describedby="alert-dialog-description"
//         >
//           <DialogTitle id="alert-dialog-title">
//             {"Use Google's location service?"}
//           </DialogTitle>
//           <DialogContent>
//             <DialogContentText id="alert-dialog-description">
//               Let Google help apps determine location. This means sending
//               anonymous location data to Google, even when no apps are running.
//             </DialogContentText>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleSlideDialogClose}>Disagree</Button>
//             <Button onClick={handleSlideDialogClose} autoFocus>
//               Agree
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </CardActions>
//     </React.Fragment>
//   );

//   const cardDragableDialog = (
//     <React.Fragment>
//       <CardContent>
//         <Typography
//           variant="h3"
//           component="div"
//           sx={{ fontSize: 14, fontWeight: "600" }}
//           color="text.secondary"
//         >
//           Alert Draggable Dialog
//         </Typography>
//       </CardContent>
//       <Divider />
//       <CardActions
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "100px",
//         }}
//       >
//         <Button variant="outlined" onClick={handleDraggableDialogOpen}>
//           Draggable alert dialog
//         </Button>
//         <Dialog
//           open={draggableDialogOpen}
//           onClose={handleDraggableDialogClose}
//           PaperComponent={PaperComponent}
//           aria-labelledby="alert-dialog-title"
//           aria-describedby="alert-dialog-description"
//         >
//           <DialogTitle id="alert-dialog-title">
//             {"Use Google's location service?"}
//           </DialogTitle>
//           <DialogContent>
//             <DialogContentText id="alert-dialog-description">
//               Let Google help apps determine location. This means sending
//               anonymous location data to Google, even when no apps are running.
//             </DialogContentText>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleDraggableDialogClose}>Disagree</Button>
//             <Button onClick={handleDraggableDialogClose} autoFocus>
//               Agree
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </CardActions>
//     </React.Fragment>
//   );

//   const cardBootstrapDialog = (
//     <React.Fragment>
//       <CardContent>
//         <Typography
//           variant="h3"
//           component="div"
//           sx={{ fontSize: 14, fontWeight: "600" }}
//           color="text.secondary"
//         >
//           Bootstrap Dialog
//         </Typography>
//       </CardContent>
//       <Divider />
//       <CardActions
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "100px",
//         }}
//       >
//         <Button variant="outlined" onClick={handlebootstrapDialogOpen}>
//           Bootstrap dialog
//         </Button>
//         <BootstrapDialog
//           onClose={handlebootstrapDialogClose}
//           aria-labelledby="customized-dialog-title"
//           open={dialogBootstrap}
//         >
//           <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
//             Modal title
//           </DialogTitle>
//           <IconButton
//             aria-label="close"
//             onClick={handlebootstrapDialogClose}
//             sx={{
//               position: "absolute",
//               right: 8,
//               top: 8,
//               color: (theme) => theme.palette.grey[500],
//             }}
//           >
//             <CloseIcon />
//           </IconButton>
//           <DialogContent dividers>
//             <Typography gutterBottom>
//               Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//               dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
//               ac consectetur ac, vestibulum at eros.
//             </Typography>
//             <Typography gutterBottom>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur
//               et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
//               auctor.
//             </Typography>
//             <Typography gutterBottom>
//               Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
//               cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
//               dui. Donec ullamcorper nulla non metus auctor fringilla.
//             </Typography>
//           </DialogContent>
//           <DialogActions>
//             <Button autoFocus onClose={handlebootstrapDialogClose}>
//               Save changes
//             </Button>
//           </DialogActions>
//         </BootstrapDialog>
//       </CardActions>
//     </React.Fragment>
//   );

//   const cardfullScreenpDialog = (
//     <React.Fragment>
//       <CardContent>
//         <Typography
//           variant="h3"
//           component="div"
//           sx={{ fontSize: 14, fontWeight: "600" }}
//           color="text.secondary"
//         >
//           FullSceen Dialog
//         </Typography>
//       </CardContent>
//       <Divider />
//       <CardActions
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "100px",
//         }}
//       >
//         <Button variant="outlined" onClick={handleOpenTransitionClick}>
//           Full screen dialog
//         </Button>
//         <Dialog
//           fullScreen
//           open={transitionDialog}
//           onClose={handleClodeTransitionClick}
//           TransitionComponent={Transition}
//         >
//           <AppBar sx={{ position: "relative" }}>
//             <Toolbar>
//               <IconButton
//                 edge="start"
//                 color="inherit"
//                 onClick={handleClodeTransitionClick}
//                 aria-label="close"
//               >
//                 <CloseIcon />
//               </IconButton>
//               <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
//                 Sound
//               </Typography>
//               <Button
//                 autoFocus
//                 color="inherit"
//                 onClick={handleClodeTransitionClick}
//               >
//                 save
//               </Button>
//             </Toolbar>
//           </AppBar>
//           <List>
//             <ListItem button>
//               <ListItemText primary="Phone ringtone" secondary="Titania" />
//             </ListItem>
//             <Divider />
//             <ListItem button>
//               <ListItemText
//                 primary="Default notification ringtone"
//                 secondary="Tethys"
//               />
//             </ListItem>
//           </List>
//         </Dialog>
//       </CardActions>
//     </React.Fragment>
//   );

//   const cardScrollableDialog = (
//     <React.Fragment>
//       <CardContent>
//         <Typography
//           variant="h3"
//           component="div"
//           sx={{ fontSize: 14, fontWeight: "600" }}
//           color="text.secondary"
//         >
//           Scrollable Dialog
//         </Typography>
//       </CardContent>
//       <Divider />
//       <CardActions
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "100px",
//         }}
//       >
//         <Button onClick={() => handleOpenScrollableClick("paper")}>
//           scroll=paper
//         </Button>
//         <Button onClick={() => handleClickOpen("body")}>scroll=body</Button>

//         <Dialog
//           open={scrollableDialog}
//           onClose={handleClsoeScrollableClick}
//           scroll={scroll}
//           aria-labelledby="scroll-dialog-title"
//           aria-describedby="scroll-dialog-description"
//         >
//           <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
//           <DialogContent dividers={scroll === "paper"}>
//             <DialogContentText
//               id="scroll-dialog-description"
//               ref={descriptionElementRef}
//               tabIndex={-1}
//             >
//               {[...new Array(50)]
//                 .map(
//                   () => `Cras mattis consectetur purus sit amet fermentum.
// Cras justo odio, dapibus ac facilisis in, egestas eget quam.
// Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
// Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
//                 )
//                 .join("\n")}
//             </DialogContentText>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleClsoeScrollableClick}>Cancel</Button>
//             <Button onClick={handleClsoeScrollableClick}>Subscribe</Button>
//           </DialogActions>
//         </Dialog>
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
//             to="/components/dialog-info"
//           >
//             Home
//           </Link>
//           <Link
//             color="primary"
//             style={{ textDecoration: "none" }}
//             aria-current="page"
//             to="/components/dialog-info"
//           >
//             Dialog
//           </Link>
//         </Breadcrumbs>
//       </div>
//       <div
//         style={{
//           //   backgroundColor: "#FFFFFF",
//           minHeight: "100vh",
//           //   borderRadius: "10px",
//         }}
//       >
//         <div style={{ fontSize: "20px", fontWeight: "600", padding: "20px" }}>
//           Dialog
//         </div>
//         <Divider />
//         <Box sx={{ width: "100%", padding: "20px" }}>
//           <Grid
//             container
//             rowSpacing={2}
//             columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//           >
//             <Grid item xs={3}>
//               <Box sx={{ minWidth: 275 }}>
//                 <Card variant="outlined" style={{ width: "300px" }}>
//                   {card}
//                 </Card>
//               </Box>
//             </Grid>
//             <Grid item xs={3} sx={{ marginLeft: 10 }}>
//               <Card variant="outlined" style={{ width: "300px" }}>
//                 {cardSlide}
//               </Card>
//             </Grid>
//             <Grid item xs={3} sx={{ marginLeft: 10 }}>
//               <Card variant="outlined" style={{ width: "300px" }}>
//                 {cardDragableDialog}
//               </Card>
//             </Grid>
//             <Grid item xs={3}>
//               <Card variant="outlined" style={{ width: "300px" }}>
//                 {cardBootstrapDialog}
//               </Card>
//             </Grid>
//             <Grid item xs={3} sx={{ marginLeft: 10 }}>
//               <Card variant="outlined" style={{ width: "300px" }}>
//                 {cardfullScreenpDialog}
//               </Card>
//             </Grid>
//             <Grid item xs={3} sx={{ marginLeft: 10 }}>
//               <Card variant="outlined" style={{ width: "300px" }}>
//                 {cardScrollableDialog}
//               </Card>
//             </Grid>
//           </Grid>
//         </Box>
//       </div>
//     </div>
//   );
// }

// export default DialogInfo;
