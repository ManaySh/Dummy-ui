import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import "react-toastify/dist/ReactToastify.css";
import {
  Card,
  CardActions,
  CardContent,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
const InputClipboard = () => {
  const [text, setText] = useState("Tekguru Solutions");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleCopyClick = () => {
    const tempInput = document.createElement("input");
    tempInput.value = text;

    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    document.execCommand("copy");

    document.body.removeChild(tempInput);

    toast.success("text copied1 ...", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const cardClipboard = (
    <React.Fragment>
      <CardContent>
        <Typography
          variant="h3"
          component="div"
          sx={{ fontSize: 14, fontWeight: "600" }}
          color="text.secondary"
        >
          Copy from TextField
        </Typography>
      </CardContent>
      <Divider />
      <CardActions style={{ margin: "15px" }}>
        <TextField
          label="Company Name"
          variant="outlined"
          value={text}
          onChange={handleTextChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton color="primary" onClick={handleCopyClick}>
                  <ContentCopyIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          fullWidth
        />
      </CardActions>
    </React.Fragment>
  );
  return (
    <div>
      <div>
        <Card variant="outlined">{cardClipboard}</Card>
        <ToastContainer autoClose={3000} />
      </div>
    </div>
  );
};

export default InputClipboard;
