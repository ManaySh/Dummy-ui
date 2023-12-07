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
  Stack,
  Typography,
} from "@mui/material";
function BasicAlert() {
  const cardAlert = (
    <React.Fragment>
      <CardContent>
        <Typography
          variant="h3"
          component="div"
          sx={{ fontSize: 14, fontWeight: "600" }}
          color="text.secondary"
        >
          Basic
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="error">This is an error alert — check it out!</Alert>
          <Alert severity="warning">
            This is a warning alert — check it out!
          </Alert>
          <Alert severity="info">This is an info alert — check it out!</Alert>
          <Alert severity="success">
            This is a success alert — check it out!
          </Alert>
        </Stack>
      </CardActions>
    </React.Fragment>
  );
  return (
    <div>
      <Card variant="outlined">{cardAlert}</Card>
    </div>
  );
}

export default BasicAlert;
