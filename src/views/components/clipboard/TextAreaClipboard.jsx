import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import "react-toastify/dist/ReactToastify.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";

const TextAreaClipboard = () => {
  const [text, setText] = useState(
    "Lorem ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga."
  );

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleCopyClick = () => {
    const tempInput = document.createElement("textarea");
    tempInput.value = text;

    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    document.execCommand("copy");

    document.body.removeChild(tempInput);

    toast.success("Text copied!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleCut = () => {
    setText("");
    toast.success("Text removed!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const cardAreaClipboard = (
    <React.Fragment>
      <CardContent>
        <Typography
          variant="h3"
          component="div"
          sx={{ fontSize: 14, fontWeight: "600" }}
          color="text.secondary"
          style={{
            marginTop: "5px",
          }}
        >
          Copy from TextArea
        </Typography>
      </CardContent>
      <br />
      <Divider />
      <CardActions style={{ margin: "15px" }}>
        <TextField
          label="Copy text"
          variant="outlined"
          value={text}
          onChange={handleTextChange}
          fullWidth
          multiline
          rows={7} // Adjust the number of rows as needed
        />
      </CardActions>
      <div style={{ marginLeft: "12px" }}>
        <IconButton color="primary" onClick={handleCopyClick}>
          <Button variant="contained" size="small">
            <ContentCopyIcon fontSize="10px" />
            Copy
          </Button>
        </IconButton>
        <IconButton color="primary">
          <Button
            variant="contained"
            size="small"
            color="secondary"
            style={{ marginLeft: "5px" }}
            onClick={handleCut}
          >
            <ContentCutIcon fontSize="10px" />
            Cut
          </Button>
        </IconButton>
      </div>
    </React.Fragment>
  );

  return (
    <div>
      <div>
        <Card variant="outlined">{cardAreaClipboard}</Card>
        <ToastContainer autoClose={3000} />
      </div>
    </div>
  );
};

export default TextAreaClipboard;
