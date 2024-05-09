import React from "react";
import "./style/features-section-style.css";
import featureImage from "../../assets/images/features-1.svg";
import { Grid } from "@mui/material";

const FeaturesSection = () => {
  return (
    <>
      <Grid container gap={4} className="container mt-5 pt-4">
        <Grid item xs={12} lg={5.8}>
          <img className="w-100" src={featureImage} alt="feature1" />
        </Grid>
        <Grid item xs={12} lg={5.8}>
          <h4 className="text-24 montserrat-font fw-bold font-dark-grey mb-4">
            Voluptatem dignissimos provident quasi corporis voluptates sit
            assumenda.
          </h4>
          <p className="opens-font text-16 card-para-color">
            Ipsum in aspernatur ut possimus sint. Quia omnis est occaecati
            possimus ea. Quas molestiae perspiciatis occaecati qui rerum.
            Deleniti quod porro sed quisquam saepe. Numquam mollitia recusandae
            non ad at et a.
          </p>
          <p className="opens-font text-16 card-para-color mt-5">
            Ad vitae recusandae odit possimus. Quaerat cum ipsum corrupti. Odit
            qui asperiores ea corporis deserunt veritatis quidem expedita
            perferendis. Qui rerum eligendi ex doloribus quia sit. Porro rerum
            eum eum.
          </p>
        </Grid>
      </Grid>
    </>
  );
};

export default FeaturesSection;
