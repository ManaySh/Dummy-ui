import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import logo from "../assets/logo.png";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
const ForgetPassword = () => {
  const navigate = useNavigate();
  const handleAlreadyaccount = () => {
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
          height: "65vh",
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
            Forgot password?
          </span>
          <div>
            <div
              style={{ color: "#929496", marginTop: "10px", fontWeight: "500" }}
            >
              Enter your email address below and we'll send you password reset
              OTP...
            </div>
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
              <div style={{ display: "grid" }}>
                {" "}
                <Button style={{ backgroundColor: "#673AB7", color: "#fff" }}>
                  Send mail
                </Button>
              </div>
              <hr style={{ marginTop: "20px" }} />
              <div
                style={{
                  textAlign: "center",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
                onClick={handleAlreadyaccount}
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

export default ForgetPassword;
