import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import { useState } from "react";
function BootstrapDialog() {
  const [dialogBootstrap, seDialogBootstrap] = useState(false);
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));
  const handlebootstrapDialogOpen = () => {
    seDialogBootstrap(true);
  };
  const handlebootstrapDialogClose = () => {
    seDialogBootstrap(false);
  };
  const cardBootstrapDialog = (
    <React.Fragment>
      <CardContent>
        <Typography
          variant="h3"
          component="div"
          sx={{ fontSize: 14, fontWeight: "600" }}
          color="text.secondary"
        >
          Bootstrap Dialog
        </Typography>
      </CardContent>
      <Divider />
      <CardActions
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100px",
        }}
      >
        <Button variant="outlined" onClick={handlebootstrapDialogOpen}>
          Bootstrap dialog
        </Button>
        <BootstrapDialog
          onClose={handlebootstrapDialogClose}
          aria-labelledby="customized-dialog-title"
          open={dialogBootstrap}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Modal title
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handlebootstrapDialogClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <Typography gutterBottom>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </Typography>
            <Typography gutterBottom>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </Typography>
            <Typography gutterBottom>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClose={handlebootstrapDialogClose}>
              Save changes
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </CardActions>
    </React.Fragment>
  );

  return (
    <div>
      <Card variant="outlined" style={{ width: "300px" }}>
        {cardBootstrapDialog}
      </Card>
    </div>
  );
}

export default BootstrapDialog;
