import React from 'react'
import {
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
function AlertIcons() {
    const cardAlertIcons = (
        <React.Fragment>
          <CardContent>
            <Typography
              variant="h3"
              component="div"
              sx={{ fontSize: 14, fontWeight: "600" }}
              color="text.secondary"
            >
              Alert With Outlined
            </Typography>
          </CardContent>
          <Divider />
          <CardActions>
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert variant="outlined" severity="error">
                This is an error alert — check it out!
              </Alert>
              <Alert variant="outlined" severity="warning">
                This is a warning alert — check it out!
              </Alert>
              <Alert variant="outlined" severity="info">
                This is an info alert — check it out!
              </Alert>
              <Alert variant="outlined" severity="success">
                This is a success alert — check it out!
              </Alert>
            </Stack>
          </CardActions>
        </React.Fragment>
      );
  return (
    <div>
       <Card variant="outlined">{cardAlertIcons}</Card>
    </div>
  )
}

export default AlertIcons
