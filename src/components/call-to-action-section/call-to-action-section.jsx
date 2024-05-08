import { Box, Button, Grid } from "@mui/material";
import React from "react";
import "./style/call-to-action-section.css";

const CallToActionSection = () => {
  return (
    <>
      <Box className="card-bg-color py-5 my-5">
        <Grid container className="container">
          <Grid item xs={12} lg={9}>
            <h1 className="montserrat-font text-30 text-white fw-bold text-center text-lg-start">
              Call To Action
            </h1>
            <p className="montserrat-font text-16 text-white mt-3">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </Grid>

          <Grid item xs={12} lg={3}>
            <Box className="d-flex justify-content-center mt-5 mt-sm-3">
              <Button
                className="montserrat-font text-16 text-white text-capitalize border-3 border-white px-5 py-2 fw-bold btn-letter-spacing mt-3"
                variant="outlined"
              >
                Call To Action
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default CallToActionSection;
