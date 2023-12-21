import React, { useState } from "react";

import {
  TextField,
  IconButton,
  InputAdornment,
  Breadcrumbs,
  Grid,
  Box,
  Divider,
} from "@mui/material";

import { Link } from "react-router-dom";
import BasicAlert from "../Alert/BasicAlert";
import InputClipboard from "./InputClipboard";
import TextAreaClipboard from "./TextAreaClipboard";
import ClipboardContainer from "./ClipboardContainer";
function ClipboardInfo() {
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
            to="/components/clipboard"
          >
            Home
          </Link>
          <Link
            color="primary"
            style={{ textDecoration: "none" }}
            aria-current="page"
            to="/components/clipboard"
          >
            Clipboard
          </Link>
        </Breadcrumbs>
      </div>
      <div
      // style={{
      //   backgroundColor: "#FFFFFF",
      //   minHeight: "100vh",
      //   borderRadius: "10px",
      // }}
      >
        <div style={{ fontSize: "20px", fontWeight: "600", padding: "20px" }}>
          Clipboard
        </div>
        <Divider />
        <Box sx={{ width: "100%", padding: "20px" }}>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              <Box sx={{ minWidth: 275 }}>
                <InputClipboard />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ minWidth: 275 }}>
                <TextAreaClipboard />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ minWidth: 275 }}>
                <ClipboardContainer />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default ClipboardInfo;
