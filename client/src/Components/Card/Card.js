import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TrophyIcon from '@mui/icons-material/EmojiEvents';
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

/*
Learning from this component:
1st approach : called the user data inside this --> this leads to call of same api n numbers of time
2nd approach : the one I m using --> help not to store data instead just pass the data between parent and child data
3rd approach : could have store the user data globally and do all the necessary operations. 
*/

export default function MultiActionAreaCard({ prop, onUserClick }) {
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    setIsFavorite(prop.isliked);
  };
  const handleFavoriteClick = async () => {
    setIsFavorite(!prop.isliked);
    onUserClick({
      ...prop,
      isliked: !prop.isliked, // Toggle the isliked property
    });
  };
  var currentDate = new Date().toISOString();
  let toshow = currentDate < prop.date;
  var newDate = new Date(prop.date).toLocaleDateString("en-GB");
  var current = new Date().toLocaleDateString("en-GB");
  const showmatch = newDate === current;

  return (
    <>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <Card
        style={{
          marginBottom: "15px",
          // marginTop: "5px",
          borderRadius: "20px",
        }}
        sx={{
          width: "100%",
          maxWidth: 700,
          "@media (min-width: 600px)": {
            width: "80%",
          },
          "@media (min-width: 900px)": {
            width: "60%",
          },
        }}
      >
        <CardContent>
          <Typography variant="h6" style={{ textAlign: "center", height: "30px", background: "#0891b2", color: "white", borderRadius: "20px", marginTop: "-7px" }}>
            {prop.sports.charAt(0).toUpperCase() + prop.sports.slice(1)} - {prop.title}
          </Typography>
          <Typography style={{ textAlign: "center", marginTop: "10px" }}>
            {prop.winner ? `Winner: ${prop.winner}` : "No winner yet"}
            {prop.winner && <TrophyIcon style={{ fontSize: 20, verticalAlign: "middle", marginLeft: "5px", color: "gold" }} />} {/* Trophy icon */}
          </Typography>
        </CardContent>
        <div style={{ display: "flex", justifyContent: "space-around", marginTop: "-15px" }}>
          <Link to={`/badmintonscore/${prop._id}`} style={{ textDecoration: "none", marginRight: "10px" }}>
            <Button size="small" color="primary" disabled={toshow}>
              View Score
            </Button>
          </Link>
          <IconButton
            aria-label="add to favorites"
            onClick={handleFavoriteClick}
            style={{ color: isFavorite ? "red" : "inherit" }}
          >
            <FavoriteIcon />
          </IconButton>
        </div>
      </Card>

    </>
  );
}
