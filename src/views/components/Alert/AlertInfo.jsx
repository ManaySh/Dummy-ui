import React from "react";
import { Box, Breadcrumbs, Divider, Grid } from "@mui/material";

import { Link } from "react-router-dom";
import BasicAlert from "./BasicAlert";
import AlertIcons from "./AlertIAction";
import AlertOutlined from "./AlertOutlined";
import AlertFilled from "./AlertFilled";
import AlertToast from "./AlertToast";

function Alertinfo() {
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
            to="/components/alert"
          >
            Home
          </Link>
          <Link
            color="primary"
            style={{ textDecoration: "none" }}
            aria-current="page"
            to="/components/alert"
          >
            Alert
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
          Alert
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
                <BasicAlert />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ minWidth: 275 }}>
                <AlertIcons />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ minWidth: 275 }}>
                <AlertIcons />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ minWidth: 275 }}>
                <AlertOutlined />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ minWidth: 275 }}>
                <AlertFilled />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ minWidth: 275 }}>
                <AlertToast />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default Alertinfo;
