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
import CheckIcon from "@mui/icons-material/Check";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function AlertOutlined() {
  const cardAlertOutline = (
    <React.Fragment>
      <CardContent>
        <Typography
          variant="h3"
          component="div"
          sx={{ fontSize: 14, fontWeight: "600" }}
          color="text.secondary"
        >
          Alert With Icons
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            This is a success alert — check it out!
          </Alert>
          <Alert
            iconMapping={{
              success: <CheckCircleOutlineIcon fontSize="inherit" />,
            }}
          >
            This is a success alert — check it out!
          </Alert>
          <Alert icon={false} severity="success">
            This is a success alert — check it out!
          </Alert>
        </Stack>
      </CardActions>
    </React.Fragment>
  );
  return (
    <div>
      <Card variant="outlined">{cardAlertOutline}</Card>
    </div>
  );
}

export default AlertOutlined;
