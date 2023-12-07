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
import Slide from "@mui/material/Slide";
import { useState } from "react";
function SlideDialog() {
  const [slideDialogOpen, setSlideDialogOpen] = useState(false);
  const handleSlideDialogOpen = () => {
    setSlideDialogOpen(true);
  };
  const handleSlideDialogClose = () => {
    setSlideDialogOpen(false);
  };
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const cardSlide = (
    <React.Fragment>
      <CardContent>
        <Typography
          variant="h3"
          component="div"
          sx={{ fontSize: 14, fontWeight: "600" }}
          color="text.secondary"
        >
          Open Slide Alert Dialog
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
        <Button variant="outlined" onClick={handleSlideDialogOpen}>
          Slide alert dialog
        </Button>
        <Dialog
          open={slideDialogOpen}
          onClose={handleSlideDialogClose}
          TransitionComponent={Transition}
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
            <Button onClick={handleSlideDialogClose}>Disagree</Button>
            <Button onClick={handleSlideDialogClose} autoFocus>
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
        {cardSlide}
      </Card>
    </div>
  );
}

export default SlideDialog;
