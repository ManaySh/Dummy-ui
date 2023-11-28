import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import logo from "../assets/logo.png";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleAlreadyAccount = () => {
    navigate("/");
  };
  return (
    <div
      style={{
        backgroundColor: "#EEF2F6",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "490px",
          height: "92vh",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "30px",
          }}
        >
          <img src={logo} alt="not available" />
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>BERRY</span>
        </div>
        <div style={{ textAlign: "center", margin: "30px" }}>
          <span
            style={{
              fontWeight: "bold",
              color: "#673AB7",
              fontSize: "23px",
            }}
          >
            Sign up
          </span>
          <div>
            <div
              style={{ color: "#929496", marginTop: "10px", fontWeight: "500" }}
            >
              Enter your credentials to continue...
            </div>
          </div>
          <div style={{ margin: "10px", fontWeight: "500", fontSize: "13px" }}>
            Sign up with Email address
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid container spacing={2} style={{ width: "450px" }}>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="FirstName"
                variant="outlined"
                size="medium"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="LastName"
                variant="outlined"
                size="medium"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Email Address/Username"
                variant="outlined"
                size="medium"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                size="medium"
                fullWidth
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword}>
                        {showPassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <div style={{ fontWeight: "600" }}>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Agree with  Terms & Condition."
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div style={{ display: "grid" }}>
                {" "}
                <Button style={{ backgroundColor: "#673AB7", color: "#fff" }}>
                  SignUp
                </Button>
              </div>
              <hr style={{ marginTop: "20px" }} />
              <div
                style={{
                  textAlign: "center",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
                onClick={handleAlreadyAccount}
              >
                Already have an account?
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
