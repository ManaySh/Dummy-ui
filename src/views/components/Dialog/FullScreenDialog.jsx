import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Dialog from "@mui/material/Dialog";

import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { useState } from "react";
import {
  AppBar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from "@mui/material";
function FullScreenDialog() {
  const [transitionDialog, setTransitionDialog] = useState(false);

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const handleOpenTransitionClick = () => {
    setTransitionDialog(true);
  };
  const handleClodeTransitionClick = () => {
    setTransitionDialog(false);
  };
  const cardfullScreenpDialog = (
    <React.Fragment>
      <CardContent>
        <Typography
          variant="h3"
          component="div"
          sx={{ fontSize: 14, fontWeight: "600" }}
          color="text.secondary"
        >
          FullSceen Dialog
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
        <Button variant="outlined" onClick={handleOpenTransitionClick}>
          Full screen dialog
        </Button>
        <Dialog
          fullScreen
          open={transitionDialog}
          onClose={handleClodeTransitionClick}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: "relative" }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClodeTransitionClick}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Sound
              </Typography>
              <Button
                autoFocus
                color="inherit"
                onClick={handleClodeTransitionClick}
              >
                save
              </Button>
            </Toolbar>
          </AppBar>
          <List>
            <ListItem button>
              <ListItemText primary="Phone ringtone" secondary="Titania" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText
                primary="Default notification ringtone"
                secondary="Tethys"
              />
            </ListItem>
          </List>
        </Dialog>
      </CardActions>
    </React.Fragment>
  );
  return (
    <div>
      <Card variant="outlined" style={{ width: "300px" }}>
        {cardfullScreenpDialog}
      </Card>
    </div>
  );
}

export default FullScreenDialog;
