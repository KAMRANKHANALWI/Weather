import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

const InfoBox = ({ info }) => {
  const INIT_URL =
    // "https://images.pexels.com/photos/1915184/pexels-photo-1915184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    "https://images.pexels.com/photos/16946348/pexels-photo-16946348/free-photo-of-rainbow-on-sky-over-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    // "https://images.pexels.com/photos/6390455/pexels-photo-6390455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    // "https://images.pexels.com/photos/982194/pexels-photo-982194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <div className="InfoBox">
      {/* <h1>WeatherInfo - {info.weather}</h1> */}
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={INIT_URL}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;C </p>
              <p>Humidity = {info.humidity} </p>
              <p>Min Temp = {info.tempMin}&deg;C </p>
              <p>Max Temp = {info.tempMax}&deg;C </p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels
                like {info.feelsLike}&deg;C{" "}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InfoBox;
