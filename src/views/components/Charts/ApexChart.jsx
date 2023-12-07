import { Breadcrumbs, Divider } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ColumnChart from "./ColumnChart";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import AreaChart from "./AreaChart";
import MixedChart from "./MixedChart";
import RedialChart from "./RedialChart";
import PolarChart from "./PolarChart";
import PieChart from "./PieChart";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  //textAlign: "center",
  color: theme.palette.text.secondary,
  height: "400px",
}));

function ApexChart() {
  return (
    <div style={{ minHeight: "100vh" }}>
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
            Chart
          </Link>
        </Breadcrumbs>
      </div>
      <div style={{ fontSize: "20px", fontWeight: "600", padding: "20px" }}>
        Charts
      </div>
      <Divider />
      <Box sx={{ flexGrow: 1, marginTop: "30px" }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <Item>
              <div>
                <h4>Column Chart</h4>
              </div>
              <Divider style={{ margin: "10px" }} />
              <ColumnChart />
            </Item>
          </Grid>
          <Grid item xs={6} md={6}>
            <Item>
              <div>
                <h4>Column Chart</h4>
              </div>
              <Divider style={{ margin: "10px" }} />
              <BarChart />
            </Item>
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ marginTop: "10px" }}>
          <Grid item xs={4} md={4}>
            <Item>
              <div>
                <h4>Column Chart</h4>
              </div>
              <Divider style={{ margin: "10px" }} />
              <LineChart />
            </Item>
          </Grid>
          <Grid item xs={4} md={4}>
            <Item>
              <div>
                <h4>Area Chart</h4>
              </div>
              <Divider style={{ margin: "10px" }} />
              <AreaChart />
            </Item>
          </Grid>
          <Grid item xs={4} md={4}>
            <Item>
              <div>
                <h4>Mixed Chart</h4>
              </div>
              <Divider style={{ margin: "10px" }} />
              <MixedChart />
            </Item>
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ marginTop: "10px" }}>
          <Grid item xs={6} md={6}>
            <Item>
              <div>
                <h4>Redial Chart</h4>
              </div>
              <Divider style={{ margin: "10px" }} />
              <RedialChart />
            </Item>
          </Grid>
          <Grid item xs={6} md={6}>
            <Item>
              <div>
                <h4>Area Chart</h4>
              </div>
              <Divider style={{ margin: "10px" }} />
              <PolarChart />
            </Item>
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ marginTop: "10px" }}>
          <Grid item xs={6} md={6}>
            <Item>
              <div>
                <h4>Pie Chart</h4>
              </div>
              <Divider style={{ margin: "10px" }} />
              <PieChart />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default ApexChart;
