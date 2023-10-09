import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function MultiActionAreaCard({ prop, onUserClick }) {
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    // console.log(prop._id)
    // console.log(prop.isliked)
    setIsFavorite(prop.isliked);
  };
  // const callapi=async(all) =>{
  //   await addliked_matches(userData._id,all);
  // }
  const handleFavoriteClick = async () => {
    setIsFavorite(!prop.isliked);
    onUserClick({
      ...prop,
      isliked: !prop.isliked, // Toggle the isliked property
    });
  };
  // const handleFavoriteClick = async(id) => {
  //           // setuserData(data);
  //           // console.log(userData)
  //           if(userData?._id)
  //           {
  //                 // console.log(liked_arr)
  //                 console.log(isFavorite);
  //                 let all = [...liked_arr];
  //                 if (!isFavorite) {
  //                   all.push(id);
  //                 } else {
  //                   all = all.filter((c) => c !== id);
  //                 }
  //                 // console.log(all);
  //                 // console.log(liked_arr)
  //                 setIsFavorite(!isFavorite);
  //                 // console.log(isFavorite);
  //                 await callapi(all); // abh await lagaya toh fetch hi nhi ho rha.
  //                 setreload(true); //data change nhi hua uss se phele hi data fetch ho rha tha
  //                 console.log(reload)

  //           }
  //     		else
  //     		{
  //     			toast("Login needed");
  //     		}

  // };
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
          boxShadow: showmatch
            ? "0px 1px 10px 1px #0891b2"
            : "0px 1px 10px 1px black",
          marginBottom: "25px",
          marginTop: "10px",
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
        <CardActionArea>
          <div
            style={{
              height: "40px",
              background: "linear-gradient(to left,#a5f3fc,#06b6d4)",
            }}
          >
            <Typography
              variant="h6"
              style={{
                textAlign: "center",
                fontWeight: "bold",
                paddingTop: "5px",
              }}
            >
              {newDate}
            </Typography>
          </div>

          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {prop.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <span>Sport:</span> {prop.sports}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <span>Winner:</span> {prop.winner}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link
            to={`/badmintonscore/${prop._id}`}
            style={{ textDecoration: "none" }}
          >
            <Button size="small" color="primary" disabled={toshow}>
              View Score
            </Button>
          </Link>
          {/* <Button size="small">Learn More</Button> */}
          <IconButton
            aria-label="add to favorites"
            onClick={() => handleFavoriteClick()}
            style={{ color: isFavorite ? "red" : "inherit" }}
          >
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}
