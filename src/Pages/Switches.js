import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { Card, CardContent, CardHeader, Box } from "@mui/material";

const Switches = () => {
  const label = { control: <Switch />, label: "Label" };

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        minHeight: "100vh",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <Grid container spacing={3} className="match-height">
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Basic Switch" />
            <CardContent>
              <Typography variant="body1" style={{ marginBottom: "10px" }}>
                Basic switches with different configurations.
              </Typography>
              <Box textAlign="center">
                <FormGroup>
                  <FormControlLabel
                    control={<Switch defaultChecked />}
                    label="Default Checked"
                  />
                  <FormControlLabel control={<Switch />} label="Unchecked" />
                  <FormControlLabel
                    control={<Switch disabled defaultChecked />}
                    label="Disabled Checked"
                  />
                  <FormControlLabel
                    control={<Switch disabled />}
                    label="Disabled"
                  />
                </FormGroup>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Label" />
            <CardContent>
              <Typography variant="body1" style={{ marginBottom: "10px" }}>
                You can provide a label to the Switch using the FormControlLabel
                component.
              </Typography>
              <Box textAlign="center">
                <FormGroup>
                  <FormControlLabel
                    control={<Switch defaultChecked />}
                    label="Label"
                  />
                  <FormControlLabel
                    required
                    control={<Switch />}
                    label="Required"
                  />
                  <FormControlLabel
                    disabled
                    control={<Switch />}
                    label="Disabled"
                  />
                </FormGroup>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Size" />
            <CardContent>
              <Typography variant="body1" style={{ marginBottom: "10px" }}>
                Use the size prop to change the size of the switch.
              </Typography>
              <Box textAlign="center">
                <Switch {...label} defaultChecked size="small" />
                <Switch {...label} defaultChecked />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Color" />
            <CardContent>
              <Typography variant="body1" style={{ marginBottom: "10px" }}>
                Customize the color of the switch.
              </Typography>
              <Box textAlign="center">
                <Switch {...label} defaultChecked />
                <Switch {...label} defaultChecked color="secondary" />
                <Switch {...label} defaultChecked color="warning" />
                <Switch {...label} defaultChecked color="default" />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Switches;
