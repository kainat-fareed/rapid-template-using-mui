import React from "react";
import AboutImage from "../../assets/images/about-img.jpg";
import { Box, Grid } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import "./style/about-us-style.css";

const AboutSection = () => {
  return (
    <>
      <Grid container gap={6} justifyContent={'center'} className={"container my-5"}>
        <Grid item xs={12} md={5}>
          <img className="w-100" src={AboutImage} alt="xyz" />
        </Grid>
        <Grid item className=" w-100" xs={12} md={5}>
          <div>
            <h1 className="text-36 montserrat-font fw-bold font-dark-grey text-center text-lg-start">
              About Us
            </h1>

            <h3 className="about-heading-second fst-italic mt-4">
              Odio sed id eos et laboriosam consequatur eos earum soluta.
            </h3>

            <p className="opens-font mt-4 about-para-color">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <p className="opens-font mt-4 about-para-color">
              Aut dolor id. Sint aliquam consequatur ex ex labore. Et quis qui
              dolor nulla dolores neque. Aspernatur consectetur omnis numquam
              quaerat. Sed fugiat nisi. Officiis veniam molestiae. Et vel ut
              quidem alias veritatis repudiandae ut fugit. Est ut eligendi
              aspernatur nulla voluptates veniam iusto vel quisquam. Fugit ut
              maxime incidunt accusantium totam repellendus eum error. Et
              repudiandae eum iste qui et ut ab alias.
            </p>

            <ul className="list-unstyled mt-4">
              <li className="my-2">
                <CheckCircleOutlineIcon sx={{ color: "#1bb1dc" }} />
                <span className="opens-font mt-4 about-para-color mx-2">
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </span>
              </li>

              <li className="my-2">
                <CheckCircleOutlineIcon sx={{ color: "#1bb1dc" }} />
                <span className="opens-font mt-4 about-para-color mx-2">
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </span>
              </li>

              <li className="my-2">
                <CheckCircleOutlineIcon sx={{ color: "#1bb1dc" }} />
                <span className="opens-font mt-4 about-para-color mx-2">
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate trideta
                  storacalaperda mastiro dolore eu fugiat nulla pariatur.
                </span>
              </li>
            </ul>
          </div>
        </Grid>
      </Grid>

    </>
  );
};

export default AboutSection;
