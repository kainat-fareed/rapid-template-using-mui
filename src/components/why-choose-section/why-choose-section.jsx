import React from "react";
import "./style/why-choose-section.css";
import { Box, Grid } from "@mui/material";
import WhyUsImage from "../../assets/images/why-us.jpg";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import InventoryIcon from "@mui/icons-material/Inventory";
import ChecklistIcon from "@mui/icons-material/Checklist";

const WhyChooseUsSection = () => {
  const whyUsList = [
    {
      icon: (
        <BookmarksIcon
          sx={{ fontSize: "40px" }}
          className="bookmark-icon-color"
        />
      ),
      heading: "Corporis dolorem",
      paragraph:
        "Commodi quia voluptatum. Est cupiditate voluptas quaerat officiis ex alias dignissimos et ipsum. Soluta at enim modi utincidunt dolor et.",
    },
    {
      icon: (
        <InventoryIcon
          sx={{ fontSize: "40px" }}
          className="inventory-icon-color"
        />
      ),
      heading: "Eum ut aspernatur",
      paragraph:
        "Molestias eius rerum iusto voluptas et ab cupiditate aut enim. Assumenda animi occaecati. Quo dolore fuga quasi autem aliquid ipsum odit. Perferendis doloremque iure nulla aut.",
    },
    {
      icon: (
        <ChecklistIcon
          sx={{ fontSize: "40px" }}
          className="checklist-icon-color"
        />
      ),
      heading: "Voluptates dolores",
      paragraph:
        "Voluptates nihil et quis omnis et eaque omnis sint aut. Ducimus dolorum aspernatur. Totam dolores ut enim ullam voluptas distinctio aut.",
    },
  ];

  const portfolioList = [
    {
      number: "232",
      subject: "Clients",
    },
    {
      number: "421",
      subject: "Projects",
    },
    {
      number: "1453",
      subject: "Hours Of Support",
    },
    {
      number: "48",
      subject: "Hard Workers",
    },
  ];

  return (
    <>
      <Box className="mt-5 text-center">
        <h1 className="montserrat-font fw-bold text-36 font-dark-grey para-color">
          Why choose us?
        </h1>
        <p className="opens-font text-16 ">
          Laudem latine persequeris id sed, ex fabulas delectus quo. No vel
          partiendo abhorreant <br /> vituperatoribus.
        </p>
      </Box>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className="container-fluid mt-5"
      >
        <Grid item xs={12} md={6}>
          <img className="w-100" src={WhyUsImage} alt="Why-us-group" />
        </Grid>
        <Grid item xs={12} md={6}>
          <p className="opens-font text-16 para-color">
            Molestiae omnis numquam corrupti omnis itaque. Voluptatum quidem
            impedit. Odio dolorum exercitationem est error omnis repudiandae ad
            dolorum sit.
          </p>

          <p className="opens-font text-16 para-color">
            Explicabo repellendus quia labore. Non optio quo ea ut ratione et
            quaerat. Porro facilis deleniti porro consequatur et temporibus.
            Labore est odio. Odio omnis saepe qui. Veniam eaque ipsum. Ea quia
            voluptatum quis explicabo sed nihil repellat..
          </p>

          <Box className="list-unstyled">
            {whyUsList.map((item) => {
              return (
                <Box className="d-flex">
                  <Box className="mt-4">{item?.icon}</Box>
                  <Box className="mx-3">
                    <h4 className="montserrat-font font-dark-grey fw-bold mt-3">
                      {item?.heading}
                    </h4>
                    <p className="list-para-color opens-font">
                      {item?.paragraph}
                    </p>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Grid>
      </Grid>

      {/* Portfolio */}

      <Grid container className="container my-5">
        {portfolioList?.map((item) => {
          return (
            <Grid item xs={12} sm={6} lg={3} className="text-center">
                <Box className="py-3">
              <Box className="text-48 fw-bold montserrat-font font-dark-grey"> {item?.number}</Box>
              <Box className="montserrat-font text-16">{item?.subject}</Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default WhyChooseUsSection;
