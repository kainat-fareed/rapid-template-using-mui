import React from "react";
import "./style/features-second-section.css";
import featureImageSecond from "../../assets/images/features-2.svg";
import { Grid } from "@mui/material";

const FeaturesSecondSection = () => {
  return (
    <>
      <Grid container gap={4} className="container mt-5 pt-4">
        <Grid item xs={12} lg={5.8}>
          <h4 className="text-24 montserrat-font fw-bold font-dark-grey mb-4">
            Neque saepe temporibus repellat ea ipsum et. Id vel et quia tempora
            facere reprehenderit.
          </h4>
          <p className="opens-font text-16 card-para-color">
            Delectus alias ut incidunt delectus nam placeat in consequatur. Sed
            cupiditate quia ea quis. Voluptas nemo qui aut distinctio. Cumque
            fugit earum est quam officiis numquam. Ducimus corporis autem at
            blanditiis beatae incidunt sunt.
          </p>
          <p className="opens-font text-16 card-para-color mt-5">
            Voluptas saepe natus quidem blanditiis. Non sunt impedit voluptas
            mollitia beatae. Qui esse molestias. Laudantium libero nisi vitae
            debitis. Dolorem cupiditate est perferendis iusto.
          </p>
          <p className="opens-font text-16 card-para-color mt-5">
            Eum quia in. Magni quas ipsum a. Quis ex voluptatem inventore sint
            quia modi. Numquam est aut fuga mollitia exercitationem nam
            accusantium provident quia.
          </p>
        </Grid>
        <Grid item xs={12} lg={5.8}>
          <img className="w-100" src={featureImageSecond} alt="feature2" />
        </Grid>
      </Grid>
    </>
  );
};

export default FeaturesSecondSection;
