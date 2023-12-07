import React, { useState } from "react";
import Box from "@mui/material/Box";

import Divider from "@mui/material/Divider";

import Grid from "@mui/material/Grid";

import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import SimpleDialog from "./SimpleDialog";
import SlideDialog from "./SlideDialog";
import DraggableDialogInfo from "./DraggableDialogInfo";
import BootstrapDialog from "./BootstrapDialog";
import FullScreenDialog from "./FullScreenDialog";
import ScrollableDialog from "./ScrollableDialog";

function DialogInfo() {
  return (
    <div>
      <div role="presentation">
        <Breadcrumbs
          aria-label="breadcrumb"
          separator="›"
          sx={{ fontSize: "15px", fontWeight: "bold", marginLeft: "17px" }}
        >
          <Link
            style={{ textDecoration: "none", color: "#9370DB" }}
            to="/components/dialog-info"
          >
            Home
          </Link>
          <Link
            color="primary"
            style={{ textDecoration: "none" }}
            aria-current="page"
            to="/components/dialog-info"
          >
            Dialog
          </Link>
        </Breadcrumbs>
      </div>
      <div
        style={{
          //   backgroundColor: "#FFFFFF",
          minHeight: "100vh",
          //   borderRadius: "10px",
        }}
      >
        <div style={{ fontSize: "20px", fontWeight: "600", padding: "20px" }}>
          Dialog
        </div>
        <Divider />
        <Box sx={{ width: "100%", padding: "20px" }}>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={3}>
              <Box sx={{ minWidth: 275 }}>
                <SimpleDialog />
              </Box>
            </Grid>
            <Grid item xs={3} sx={{ marginLeft: 10 }}>
              <SlideDialog />
            </Grid>
            <Grid item xs={3} sx={{ marginLeft: 10 }}>
              <DraggableDialogInfo />
            </Grid>
            <Grid item xs={3}>
              <BootstrapDialog />
            </Grid>
            <Grid item xs={3} sx={{ marginLeft: 10 }}>
              <FullScreenDialog />
            </Grid>
            <Grid item xs={3} sx={{ marginLeft: 10 }}>
              <ScrollableDialog />
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default DialogInfo;
