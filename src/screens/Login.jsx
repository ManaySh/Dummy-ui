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
import axios from "axios";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [person, setPerson] = useState({ email: "", password: "" });
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleForgetOpen = () => {
    navigate("/forget-password");
  };
  const handleSignupClick = () => {
    navigate("/sign-up");
  };
  const handleClcik = () => {
    axios
      .get("https://fakestoreapi.com/users")
      .then((res) => {
        const matchingUser = res.data.find(
          (user) =>
            user.email === person.email && user.password === person.password
        );

        if (matchingUser) {
          console.log("Credentials are valid:", matchingUser);
          navigate("/advance/dialog-info");
        } else {
          // Credentials are not valid, handle accordingly
          setError(true);
          console.log("Invalid credentials");
        }
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      });
  };
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
    console.log(name, value);
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
          height: "90vh",
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
            Hi, Welcome Back
          </span>
          <div>
            <div
              style={{ color: "#929496", marginTop: "10px", fontWeight: "500" }}
            >
              Enter your Credential to Continue...
            </div>
            <div
              style={{
                color: "#929496",
                marginTop: "25px",
                fontWeight: "500",
                boxSizing: "border-box",
              }}
            >
              <span
                style={{
                  padding: "10px",
                  backgroundColor: "#EEF2F6",
                  borderRadius: "5px",
                  color: "#673AB7",
                }}
              >
                Email:&nbsp;jhon@gmail.com / Pass:&nbsp;m38rmF$
              </span>
            </div>
          </div>
        </div>
        <div></div>
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
                id="email"
                label="Email Address/Username"
                variant="outlined"
                size="medium"
                fullWidth
                name="email"
                value={person.email}
                onChange={handleChange}
                style={{ marginTop: "10px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                size="medium"
                fullWidth
                name="password"
                value={person.password}
                onChange={handleChange}
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

            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Keep me logged in"
                />
              </div>
              <div
                style={{
                  color: "#673AB7",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
                onClick={handleForgetOpen}
              >
                Forget Password
              </div>
            </Grid>
            <Grid item xs={12}>
              <div style={{ display: "grid" }}>
                {" "}
                {error && (
                  <span style={{ color: "red", marginBottom: "15px" }}>
                    invalid credentials
                  </span>
                )}
                <Button
                  style={{ backgroundColor: "#673AB7", color: "#fff" }}
                  onClick={handleClcik}
                >
                  SignIn
                </Button>
              </div>
              <hr style={{ marginTop: "20px" }} />
              <div
                style={{
                  textAlign: "center",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
                onClick={handleSignupClick}
              >
                Don't have account
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Login;
