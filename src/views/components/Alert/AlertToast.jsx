import React from "react";
import {
  Alert,
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
function AlertToast() {
  const cardAlertToast = (
    <React.Fragment>
      <CardContent>
        <Typography
          variant="h3"
          component="div"
          sx={{ fontSize: 14, fontWeight: "600" }}
          color="text.secondary"
        >
          Alert With Toast
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Alert severity="success" color="info" style={{ width: "100%" }}>
          This is a success alert — check it out!
        </Alert>
      </CardActions>
    </React.Fragment>
  );
  return (
    <div>
      <Card variant="outlined">{cardAlertToast}</Card>
    </div>
  );
}

export default AlertToast;
