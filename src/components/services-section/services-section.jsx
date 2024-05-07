import React from "react";
import "./style/services-section-style.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, CardActions, IconButton } from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

const ServicesSection = () => {
  return (
    <>
      <Box className="services-section-bg-color mt-5">
        <Box className="text-center pt-5">
          <h1 className="text-30 montserrat-font fw-bold font-dark-grey">
            Services
          </h1>
          <p className="text-20 services-para-color mt-3">
            Laudem latine persequeris id sed, ex fabulas delectus quo. No vel
            partiendo <br />
            abhorreant vituperatoribus.
          </p>
        </Box>

        {/* Cards */}
        <Box className="container mt-5">
          {/* Card row 1 */}
          <Box className="row">
            <Box className="col-md-4 my-4 my-sm-0">
              <Card sx={{ maxWidth: 500 }}>
                <CardContent>
                  <Box className="text-center my-3">
                    <WorkOutlineIcon
                      sx={{
                        color: "#413E66",
                        fontSize: "60px",
                        color: "#FE689B",
                      }}
                      className="bg-card1-icon rounded-pill p-2"
                    />
                  </Box>
                </CardContent>

                <CardActionArea>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="fw-bold text-center montserrat-font"
                    >
                      Lorem Ipsum
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate non provident
                  </Typography>
                </CardContent>
              </Card>
            </Box>

            <Box className="col-md-4 my-4 my-sm-0">
              <Card sx={{ maxWidth: 500 }}>
                <CardContent>
                  <Box className="text-center my-3">
                    <WorkOutlineIcon
                      sx={{
                        color: "#413E66",
                        fontSize: "60px",
                        color: "#FE689B",
                      }}
                      className="bg-card1-icon rounded-pill p-2"
                    />
                  </Box>
                </CardContent>

                <CardActionArea>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="fw-bold text-center montserrat-font"
                    >
                      Lorem Ipsum
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate non provident
                  </Typography>
                </CardContent>
              </Card>
            </Box>

            <Box className="col-md-4 my-4 my-sm-0">
              <Card sx={{ maxWidth: 500 }}>
                <CardContent>
                  <Box className="text-center my-3">
                    <WorkOutlineIcon
                      sx={{
                        color: "#413E66",
                        fontSize: "60px",
                        color: "#FE689B",
                      }}
                      className="bg-card1-icon rounded-pill p-2"
                    />
                  </Box>
                </CardContent>

                <CardActionArea>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="fw-bold text-center montserrat-font"
                    >
                      Lorem Ipsum
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate non provident
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>

          {/* Card row 2 */}
          <Box className="row mt-4">
            <Box className="col-md-4 my-4 my-sm-0">
              <Card sx={{ maxWidth: 500 }}>
                <CardContent>
                  <Box className="text-center my-3">
                    <WorkOutlineIcon
                      sx={{
                        color: "#413E66",
                        fontSize: "60px",
                        color: "#FE689B",
                      }}
                      className="bg-card1-icon rounded-pill p-2"
                    />
                  </Box>
                </CardContent>

                <CardActionArea>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="fw-bold text-center montserrat-font"
                    >
                      Lorem Ipsum
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate non provident
                  </Typography>
                </CardContent>
              </Card>
            </Box>

            <Box className="col-md-4 my-4 my-sm-0">
              <Card sx={{ maxWidth: 500 }}>
                <CardContent>
                  <Box className="text-center my-3">
                    <WorkOutlineIcon
                      sx={{
                        color: "#413E66",
                        fontSize: "60px",
                        color: "#FE689B",
                      }}
                      className="bg-card1-icon rounded-pill p-2"
                    />
                  </Box>
                </CardContent>

                <CardActionArea>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="fw-bold text-center montserrat-font"
                    >
                      Lorem Ipsum
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate non provident
                  </Typography>
                </CardContent>
              </Card>
            </Box>

            <Box className="col-md-4 my-4 my-sm-0">
              <Card sx={{ maxWidth: 500 }}>
                <CardContent>
                  <Box className="text-center my-3">
                    <WorkOutlineIcon
                      sx={{
                        color: "#413E66",
                        fontSize: "60px",
                        color: "#FE689B",
                      }}
                      className="bg-card1-icon rounded-pill p-2"
                    />
                  </Box>
                </CardContent>

                <CardActionArea>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="fw-bold text-center montserrat-font"
                    >
                      Lorem Ipsum
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate non provident
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ServicesSection;
