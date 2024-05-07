import React from "react";
import AboutImage from "../../assets/images/about-img.jpg";
import { Box } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import "./style/about-us-style.css";

const AboutSection = () => {
  return (
    <>
      <Box className="container pt-5 mt-4">
        <Box className="row d-flex align-items-center">
          <Box className="col-lg-5 col-md-6">
            <Box className="about-img">
              <img className="d-none d-md-block" src={AboutImage} alt="about-us-image" />
            </Box>
          </Box>

          <Box className="col-lg-7 col-md-6 ml-5">
            <Box>
              <h1 className="text-36 montserrat-font fw-bold font-dark-grey text-center text-lg-start">
                About Us
              </h1>
            </Box>

            <Box>
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
            </Box>

            <Box>
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
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate trideta
                    storacalaperda mastiro dolore eu fugiat nulla pariatur.
                  </span>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AboutSection;
