import { Box, Button, Card, CardContent, Grid } from "@mui/material";
import React from "react";
import "./style/pricing-style.css";

const PricingSection = () => {
  const pricingCardData = [
    {
      price: "19",
      plan: "Basic Plan",
    },
    {
      price: "29",
      plan: "Regular Plan",
    },
    {
      price: "39",
      plan: "Premium Plan",
    },
  ];

  return (
    <>
      <Box className="section-bg-color py-5">
        <h1 className="montserrat-font fw-bold text-36 font-dark-grey text-center">
          Pricing
        </h1>
        <p className="opens-font text-16 text-center my-4">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque
        </p>

        <Grid container gap={5} className="container">
          {pricingCardData?.map((item) => {
            return (
              <Grid item xs={11.7} lg={3.7}>
                <Card className="card-style bg-white text-center py-2">
                  <CardContent>
                    <h1 className="text-64 montserrat-font font-dark-grey">
                      <span class="currency">$</span>
                      {item.price}
                      <span class="period">/month</span>
                    </h1>
                    <span className="text-23 montserrat-font fw-300 plan-heading-color mb-4">
                      {item?.plan}
                    </span>
                    <ul className="list-unstyled">
                      <li className="item-color opens-font text-16 my-3">
                        Odio animi voluptates
                      </li>
                      <li className="item-color opens-font text-16 my-3">
                        Inventore quisquam et
                      </li>
                      <li className="item-color opens-font text-16 my-3">
                        Et perspiciatis suscipit
                      </li>
                      <li className="item-color opens-font text-16 my-3">
                        24/7 Support System
                      </li>
                    </ul>
                    <Button
                      variant="contained"
                      className="btn-choose-plan opens-font px-4 py-2 mt-2"
                    >
                      CHOOSE PLAN
                    </Button>
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

export default PricingSection;
