import React from "react";
import "./style/services-section-style.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ChecklistIcon from "@mui/icons-material/Checklist";
import BarChartIcon from "@mui/icons-material/BarChart";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import LightModeIcon from "@mui/icons-material/LightMode";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const ServicesSection = () => {
  const cardDummyData = [
    {
      icon: (
        <WorkOutlineIcon
          sx={{
            fontSize: "60px",
          }}
          className="bg-workout-icon rounded-pill p-2"
        />
      ),
      title: "Lorem Ipsum",
      decp: `Voluptatum deleniti atque corrupti quos dolores et quas 
      molestias excepturi sint occaecati cupiditate non provident`,
    },
    {
      icon: (
        <ChecklistIcon
          sx={{
            fontSize: "60px",
          }}
          className="bg-checklist-icon rounded-pill p-2"
        />
      ),
      title: "Dolor Sitema",
      decp: `Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata`,
    },
    {
      icon: (
        <BarChartIcon
          sx={{
            fontSize: "60px",
          }}
          className="bg-barchart-icon rounded-pill p-2"
        />
      ),
      title: "Sed ut perspiciatis",
      decp: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur`,
    },
    {
      icon: (
        <VideoLibraryIcon
          sx={{
            fontSize: "60px",
          }}
          className="bg-binocular-icon rounded-pill p-2"
        />
      ),
      title: "Lorem Magni Dolores",
      decp: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`,
    },
    {
      icon: (
        <LightModeIcon
          sx={{
            fontSize: "60px",
          }}
          className="bg-lightmode-icon rounded-pill p-2"
        />
      ),
      title: "Nemo Enim",
      decp: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque`,
    },
    {
      icon: (
        <CalendarMonthIcon
          sx={{
            fontSize: "60px",
          }}
          className="bg-calendar-icon rounded-pill p-2"
        />
      ),
      title: "Eiusmod Tempor",
      decp: `Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi`,
    },
  ];
  return (
    <>
      <Box className="services-section-bg-color mt-5">
        <Box className="text-center pt-5">
          <h1 className="text-36 montserrat-font fw-bold font-dark-grey">
            Services
          </h1>
          <p className="text-16 services-para-color mt-3">
            Laudem latine persequeris id sed, ex fabulas delectus quo. No vel
            partiendo <br />
            abhorreant vituperatoribus.
          </p>
        </Box>

        <Grid container gap={8} className="container my-5 pb-5">
          {cardDummyData?.map((item) => {
            return (
              <Grid item xs={12} sm={5.2} lg={3.5}>
                <Card sx={{ minHeight: 270 }} className="card-style">
                  <CardContent className="py-4">
                    <Box className="text-center">{item?.icon}</Box>

                    <Box className="fw-bold text-center text-18 montserrat-font my-3 card-heading">
                      {item?.title}
                    </Box>

                    <Box className="opens-font text-14 card-para-color ">
                      {item?.decp}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default ServicesSection;
