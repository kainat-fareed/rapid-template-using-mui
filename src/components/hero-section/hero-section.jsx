import React from "react";
import HeroImage from "../../assets/images/intro-img.svg";
import { Box, Button } from "@mui/material";
import "./style/hero-section.css";

export const HeroSection = () => {
  return (
    <>
      <Box className="container d-flex align-items-center hero-section-height">
        <Box className="row gy-3">
          <Box className="col-md-6 d-flex align-items-center order-last order-md-first order-lg-first">
            <Box>
              <h1 className="montserrat-font font-dark-grey text-32 fw-bold text-center text-sm-center text-md-start">
                Rapid Solutions for Your{" "}
                <span className="text-light-blue">Business!</span>
              </h1>

              <Box className="d-flex justify-content-center justify-content-md-start">
                <Button
                  className="montserrat-font btn-get-started fw-bold px-4 py-2 rounded-1 mt-4"
                  variant="contained"
                >
                  GET STARTED
                </Button>
              </Box>
            </Box>
          </Box>

          <Box className="col-md-6">
            <img className="img-fluid" src={HeroImage} alt="Group" />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
