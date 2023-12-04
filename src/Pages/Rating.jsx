import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const StyledRating = (props) => <Rating {...props} />;

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const customIcons = {
  1: {
    label: "1 Heart",
    icon: <FavoriteIcon fontSize="inherit" />,
    emptyIcon: <FavoriteBorderIcon fontSize="inherit" />,
  },
  2: {
    label: "2 Hearts",
    icon: <FavoriteIcon fontSize="inherit" />,
    emptyIcon: <FavoriteBorderIcon fontSize="inherit" />,
  },
};

const IconContainer = ({ value, ...props }) => {
  const Icon = customIcons[value].icon;
  return <span {...props}>{Icon}</span>;
};

const getLabelText = (value) => {
  return customIcons[value] ? customIcons[value].label : "";
};

const Ratings = () => {
  const [value, setValue] = useState(2.5);
  const [hover, setHover] = useState(-1);

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
            <CardHeader title="Basic Rating" />
            <CardContent>
              <Typography component="legend">Controlled</Typography>
              <Rating
                name="controlled-rating"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <Typography component="legend">Read only</Typography>
              <Rating name="read-only" value={value} readOnly />
              <Typography component="legend">Disabled</Typography>
              <Rating name="disabled" value={value} disabled />
              <Typography component="legend">No rating given</Typography>
              <Rating name="no-value" value={null} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Rating precision" />
            <CardContent>
              <Typography component="legend">Precision</Typography>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              <Typography component="legend">Precision - Read Only</Typography>
              <Rating
                name="half-rating-read"
                defaultValue={2.5}
                precision={0.5}
                readOnly
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Hover feedback" />
            <CardContent>
              <Typography component="legend">Hover feedback</Typography>
              <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <FavoriteBorderIcon
                    style={{ opacity: 0.55 }}
                    fontSize="inherit"
                  />
                }
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </CardContent>
          </Card>
        </Grid>
        {/* ... More cards */}
      </Grid>
    </div>
  );
};

export default Ratings;
