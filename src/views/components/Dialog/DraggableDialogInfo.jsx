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
import { useState } from "react";

import Draggable from "react-draggable";
import { Paper } from "@mui/material";

function DraggableDialogInfo() {
  const [draggableDialogOpen, setDraggableDialogOpen] = useState(false);
  const handleDraggableDialogOpen = () => {
    setDraggableDialogOpen(true);
  };
  const handleDraggableDialogClose = () => {
    setDraggableDialogOpen(false);
  };

  function PaperComponent(props) {
    return (
      <Draggable
        handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>
    );
  }
  const cardDragableDialog = (
    <React.Fragment>
      <CardContent>
        <Typography
          variant="h3"
          component="div"
          sx={{ fontSize: 14, fontWeight: "600" }}
          color="text.secondary"
        >
          Alert Draggable Dialog
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
        <Button variant="outlined" onClick={handleDraggableDialogOpen}>
          Draggable alert dialog
        </Button>
        <Dialog
          open={draggableDialogOpen}
          onClose={handleDraggableDialogClose}
          PaperComponent={PaperComponent}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDraggableDialogClose}>Disagree</Button>
            <Button onClick={handleDraggableDialogClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </CardActions>
    </React.Fragment>
  );
  return (
    <div>
      <Card variant="outlined" style={{ width: "300px" }}>
        {cardDragableDialog}
      </Card>
    </div>
  );
}

export default DraggableDialogInfo;
