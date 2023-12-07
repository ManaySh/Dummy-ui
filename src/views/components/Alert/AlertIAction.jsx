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
function AlertIcons() {
  const cardAlertActions = (
    <React.Fragment>
      <CardContent>
        <Typography
          variant="h3"
          component="div"
          sx={{ fontSize: 14, fontWeight: "600" }}
          color="text.secondary"
        >
          Alert With Actions
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert onClose={() => {}}>
            This is a success alert — check it out!
          </Alert>
          <Alert
            action={
              <Button color="inherit" size="small">
                UNDO
              </Button>
            }
          >
            This is a success alert — check it out!
          </Alert>
        </Stack>
      </CardActions>
    </React.Fragment>
  );
  return (
    <div>
      <Card variant="outlined">{cardAlertActions}</Card>
    </div>
  );
}

export default AlertIcons;
