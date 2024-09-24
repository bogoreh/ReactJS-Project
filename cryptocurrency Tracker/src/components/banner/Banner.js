import React from "react";
import { Container, Typography } from "@mui/material";
// import backgroundImage from "../../Images/banner2.jpg";
import backgroundImage4 from "../../Images/banner4.jpg";
import Carousel from "./Carousel";
const Banner = () => {

  const bgImage = {
    backgroundImage: `url(${backgroundImage4})`,
  };
  const bannerContent = {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  };
  const tagline = {
    height:'40%',
    display:'flex',
    flexDirection:"column",
    justifyContent:'center',
    alignItems:'center',

  };

  return (
    <div style={bgImage}>
      <Container style={bannerContent}>
        <div style={tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            CryptoPilot
          </Typography>
          <Typography
            variant="subtitle1"
            style={{
                color: "darkgrey",
                textTransform:"capitalize",
                fontFamily: "Montserrat",
            }}
          >
            Get all the info regarding your favourite Cryptocurrency
          </Typography>
        </div>
        <Carousel/>
      </Container>
    </div>
  );
};

export default Banner;
