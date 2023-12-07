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

function ScrollableDialog() {
  const [scrollableDialog, setScrollableDialog] = useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleOpenScrollableClick = (scrollType) => {
    setScroll(scrollType);
    setScrollableDialog(true);
  };

  const handleClsoeScrollableClick = () => {
    setScrollableDialog(false);
  };

  const descriptionElementRef = React.useRef(null);

  React.useEffect(() => {
    if (scrollableDialog) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [scrollableDialog]);

  const cardScrollableDialog = (
    <React.Fragment>
      <CardContent>
        <Typography
          variant="h3"
          component="div"
          sx={{ fontSize: 14, fontWeight: "600" }}
          color="text.secondary"
        >
          Scrollable Dialog
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
        <Button onClick={() => handleOpenScrollableClick("paper")}>
          scroll=paper
        </Button>
        <Button onClick={() => handleOpenScrollableClick("body")}>
          scroll=body
        </Button>

        <Dialog
          open={scrollableDialog}
          onClose={handleClsoeScrollableClick}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
          <DialogContent dividers={scroll === "paper"}>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
              {[...new Array(50)]
                .map(
                  () => `Cras mattis consectetur purus sit amet fermentum.
    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
    Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                )
                .join("\n")}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClsoeScrollableClick}>Cancel</Button>
            <Button onClick={handleClsoeScrollableClick}>Subscribe</Button>
          </DialogActions>
        </Dialog>
      </CardActions>
    </React.Fragment>
  );
  return (
    <div>
      <Card variant="outlined" style={{ width: "300px" }}>
        {cardScrollableDialog}
      </Card>
    </div>
  );
}

export default ScrollableDialog;
