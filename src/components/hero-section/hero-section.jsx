import React from "react";
import HeroImage from "../../assets/images/intro-img.svg";
import { Box, Button } from "@mui/material";
// import "./hero-section-style.css";

export const HeroSection = () => {
  return (
    <>
      <Box class="container">
        <Box class="row">
          <Box class="col-md-6">
            <h1>Rapid Solutions for Your Business!</h1>
            <Box>
            <Button variant="contained">GET STARTED</Button>
            </Box>
          </Box>

          <Box class="col-md-6">
            <Box>
              <img class="img-fluid" src={HeroImage} alt="Group" />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
