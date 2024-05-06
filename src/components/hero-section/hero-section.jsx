import React from "react";
import HeroImage from "../../assets/images/intro-img.svg";
import { Box, Button } from "@mui/material";
import "./style/hero-section.css";

export const HeroSection = () => {
  return (
    <>
      <Box class="container d-flex align-items-center hero-section">
        <Box class="row">
          <Box className="col-md-6 d-flex align-items-center">
            <Box>
              <h1>Rapid Solutions for Your Business!</h1>
              <Box>
                <Button variant="contained">GET STARTED</Button>
              </Box>
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
