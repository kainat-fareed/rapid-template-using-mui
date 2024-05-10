import React from "react";
import "./style/team-section-style.css";
import { Box, Grid } from "@mui/material";
import TeamM1 from "../../assets/images/team-1.jpg";
import TeamM2 from "../../assets/images/team-2.jpg";
import TeamM3 from "../../assets/images/team-3.jpg";
import TeamM4 from "../../assets/images/team-4.jpg";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const TeamSection = () => {
  const teamProfiles = [
    {
      image: TeamM1,
      name: "Walter White",
      title: "Chief Executive Officer",
    },

    {
      image: TeamM2,
      name: "Sarah Jhonson",
      title: "Product Manager",
    },

    {
      image: TeamM3,
      name: "William Anderson",
      title: "CTO",
    },

    {
      image: TeamM4,
      name: "Amanda Jepson",
      title: "Accountant",
    },
  ];

  return (
    <>
      <Box className="text-center my-5 py-5 team-section-bg">
        <h1 className="montserrat-font fw-bold font-dark-grey">Team</h1>
        <p className="opens-font text-15 text-gray">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque
        </p>

        <Grid container gap={3} className="container">
          {teamProfiles?.map((item) => {
            return (
              <Grid item sm={11.7} md={5.7} lg={2.8} className="d-flex justify-content-sm-center">
                <div className="testimonials">
                  <div class="show">
                    <img
                      className="img-fluid"
                      src={item.image}
                      alt="Team Profile"
                    />
                  </div>
                  <div class="hide">
                    <Box className=" member-info-text">
                      <h1 className="montserrat-font text-white text-18 fw-bold">
                        {item?.name}
                      </h1>
                      <span className="opens-font text-white text-13 fst-italic">
                        {item?.title}
                      </span>
                      <Box>
                        <TwitterIcon className="text-white text-20 mx-1 icon-hover" />
                        <FacebookIcon className="text-white text-20 mx-1 icon-hover" />
                        <LinkedInIcon className="text-white text-20 mx-1 icon-hover" />
                        <InstagramIcon className="text-white text-20 mx-1 icon-hover" />
                      </Box>
                    </Box>
                  </div>
                </div>
                </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default TeamSection;
