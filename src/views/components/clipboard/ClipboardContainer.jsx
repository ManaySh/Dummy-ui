import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
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

const ClipboardContainer = () => {
  const [text, setText] = useState(
    "Lorem ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis . Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga."
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
  };

  const cardAreaClipboard = (
    <React.Fragment>
      <CardContent>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              component="div"
              sx={{ fontSize: 14, fontWeight: "600" }}
              color="text.secondary"
            >
              Copy from Container
            </Typography>
          </div>
          <div>
            <IconButton color="primary" onClick={handleCopyClick}>
              <ContentCopyIcon />
            </IconButton>
          </div>
        </div>
      </CardContent>
      <Divider />
      <CardActions style={{ margin: "15px" }}>
        <TextField
          label="Copy text"
          variant="outlined"
          value={text}
          onChange={handleTextChange}
          fullWidth
          multiline
          rows={5}
        />
      </CardActions>
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

export default ClipboardContainer;
