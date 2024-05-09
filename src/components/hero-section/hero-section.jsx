import React from "react";
import HeroImage from "../../assets/images/intro-img.svg";
import { Box, Button, Grid } from "@mui/material";
import "./style/hero-section.css";

export const HeroSection = () => {
  return (
    <>
      <Grid
        container
        gap={6}
        alignContent={"center"}
        className="container hero-section-height"
      >
        <Grid item sm={12} md={5}  alignContent={"center"} className=" order-last order-lg-first">
          <h1 className="montserrat-font font-dark-grey text-40 fw-bold text-center text-sm-center text-md-start">
            Rapid Solutions for Your{" "}
            <span className="text-light-blue">Business!</span>
          </h1>

          <Button
            className="montserrat-font btn-get-started fw-bold px-4 py-2 rounded-1 mt-4"
            variant="contained"
          >
            GET STARTED
          </Button>
        </Grid>
        <Grid item sm={12} md={6}>
          {" "}
          <img className="img-fluid" src={HeroImage} alt="Group" />
        </Grid>
      </Grid>
    </>
  );
};

export default HeroSection;
