import React, { useState } from "react";
import "./style/portfolio-section.css";
import App1Image from "../../assets/images/app1.jpg";
import App2Image from "../../assets/images/app2.jpg";
import App3Image from "../../assets/images/app3.jpg";
import Card1Image from "../../assets/images/card1.jpg";
import Card2Image from "../../assets/images/card2.jpg";
import Card3Image from "../../assets/images/card3.jpg";
import Web1Image from "../../assets/images/web1.jpg";
import Web2Image from "../../assets/images/web2.jpg";
import Web3Image from "../../assets/images/web3.jpg";
import { Box, Grid } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LinkIcon from "@mui/icons-material/Link";

const PortfolioSection = () => {
  const [filterValue, setFilterValue] = useState("all");
  const [filterArrOne, setFilterArrOne] = useState([]);
  const [filterArrTwo, setFilterArrTwo] = useState([]);
  const [filterArrThree, setFilterArrThree] = useState([]);

  console.log(filterArrOne, "filterValue");

  const arrColumnOne = [
    {
      category: "app",
      image: App1Image,
      heading: "App1",
      title: "APP",
      addIcon: (
        <AddCircleIcon
          sx={{
            fontSize: "60px",
          }}
          className=""
        />
      ),
      linkIcon: (
        <LinkIcon
          sx={{
            fontSize: "60px",
          }}
          className=""
        />
      ),
    },
    {
      category: "app",
      image: App3Image,
      heading: "App3",
      title: "APP",
      addIcon: (
        <AddCircleIcon
          sx={{
            fontSize: "60px",
          }}
          className=""
        />
      ),
      linkIcon: (
        <LinkIcon
          sx={{
            fontSize: "60px",
          }}
          className=""
        />
      ),
    },

    {
      category: "card",
      image: Card1Image,
      heading: "Card1",
      title: "CARD",
      addIcon: (
        <AddCircleIcon
          sx={{
            fontSize: "60px",
          }}
          className=""
        />
      ),
      linkIcon: (
        <LinkIcon
          sx={{
            fontSize: "60px",
          }}
          className=""
        />
      ),
    },
  ];

  const arrColumnTwo = [
    {
      category: "web",
      image: Web3Image,
      heading: "Web3",
      title: "WEB",
      addIcon: (
        <AddCircleIcon
          sx={{
            fontSize: "60px",
          }}
          className=""
        />
      ),
      linkIcon: (
        <LinkIcon
          sx={{
            fontSize: "60px",
          }}
          className=""
        />
      ),
    },
    {
      category: "web",
      image: Web2Image,
      heading: "Web2",
      title: "WEB",
      addIcon: (
        <AddCircleIcon
          sx={{
            fontSize: "60px",
          }}
          className=""
        />
      ),
      linkIcon: (
        <LinkIcon
          sx={{
            fontSize: "60px",
          }}
          className=""
        />
      ),
    },

    {
      category: "web",
      image: Web1Image,
      heading: "Web1",
      title: "WEB",
      addIcon: (
        <AddCircleIcon
          sx={{
            fontSize: "60px",
          }}
          className=""
        />
      ),
      linkIcon: (
        <LinkIcon
          sx={{
            fontSize: "60px",
          }}
          className=""
        />
      ),
    },
  ];

  const arrColumnThree = [
    {
      category: "app",
      image: App2Image,
      heading: "App2",
      title: "APP",
      addIcon: (
        <AddCircleIcon
          sx={{
            fontSize: "60px",
          }}
          className=""
        />
      ),
      linkIcon: (
        <LinkIcon
          sx={{
            fontSize: "60px",
          }}
          className=""
        />
      ),
    },
    {
      category: "card",
      image: Card2Image,
      heading: "Card2",
      title: "CARD",
      addIcon: (
        <AddCircleIcon
          sx={{
            fontSize: "60px",
          }}
          className=""
        />
      ),
      linkIcon: (
        <LinkIcon
          sx={{
            fontSize: "60px",
          }}
          className=""
        />
      ),
    },
    {
      category: "card",
      image: Card3Image,
      heading: "Card3",
      title: "CARD",
      addIcon: (
        <AddCircleIcon
          sx={{
            fontSize: "60px",
          }}
          className=""
        />
      ),
      linkIcon: (
        <LinkIcon
          sx={{
            fontSize: "60px",
          }}
          className=""
        />
      ),
    },
  ];

  const filterData = (category) => {
    if (category === "all") {
      setFilterArrOne([]);
      setFilterArrTwo([]);
      setFilterArrThree([]);
    }
    const arrOneFilter = arrColumnOne?.filter((i) => i?.category == category);
    setFilterArrOne(arrOneFilter);
    const arrTwoFilter = arrColumnTwo?.filter((i) => i.category == category);
    setFilterArrTwo(arrTwoFilter);
    const arrThreeFilter = arrColumnThree?.filter(
      (i) => i.category == category
    );
    setFilterArrThree(arrThreeFilter);

    console.log(arrOneFilter, arrTwoFilter, arrThreeFilter, "arrOneFilter");
  };

  return (
    <>
      <Box className="portfolio-section-bg-color py-5">
        <h1 className="text-36 montserrat-font fw-bold font-dark-grey text-center mt-3">
          Our Portfolio
        </h1>

        <div className="text-center my-5">
          <span
            className="mx-2 opens-font text-16 portfolio-link-color active-link"
            onClick={() => {
              filterData("all");
            }}
          >
            All
          </span>
          <span
            className="mx-2 opens-font text-16 portfolio-link-color"
            onClick={() => {
              filterData("app");
            }}
          >
            App
          </span>
          <span
            className="mx-2 opens-font text-16 portfolio-link-color"
            onClick={() => {
              filterData("card");
            }}
          >
            Card
          </span>
          <span
            className="mx-2 opens-font text-16 portfolio-link-color"
            onClick={() => {
              filterData("web");
            }}
          >
            Web
          </span>
        </div>

        <Box className="container pb-4">
          <Grid container xs={12} gap={1}>
            <Grid item xs={12} md={3.9}>
              {filterArrOne?.length > 0
                ? false
                : true && (
                    <Grid container md={12} gap={2}>
                      {(filterArrOne?.length > 0
                        ? filterArrOne
                        : arrColumnOne
                      )?.map((item) => {
                        return (
                          <img src={item?.image} className="img-fluid image" alt="" />
                        );
                        
                      })}
                    </Grid>
                  )}
            </Grid>
            <Grid item xs={12} md={3.9}>
              {filterArrTwo?.length > 0
                ? false
                : true && (
                    <Grid container md={12} gap={2}>
                      {(filterArrTwo?.length > 0
                        ? filterArrTwo
                        : arrColumnTwo
                      )?.map((item) => {
                        return (
                          <img src={item?.image} className="img-fluid" alt="" />
                        );
                      })}
                    </Grid>
                  )}
            </Grid>
            <Grid item xs={12} md={3.9}>
              {filterArrThree?.length > 0
                ? false
                : true && (
                    <Grid container md={12} gap={2}>
                      {(filterArrThree?.length > 0
                        ? filterArrThree
                        : arrColumnThree
                      )?.map((item) => {
                        return (
                          <img src={item?.image} className="img-fluid" alt="" />
                        );
                      })}
                    </Grid>
                  )}
            </Grid>
          </Grid>
        </Box>

        {/* <Box className='d-flex'>
        <Grid container className="d-flex flex-column">
          {arrColumnOne?.map((item) => {
            return (
              <Grid item xs={12} md={6}>
                <img className="w-100" src={item?.image} alt="App 1" />
              </Grid>
            );
          })}
        </Grid>

        <Grid container className="d-flex flex-column">
          {arrColumnTwo?.map((item) => {
            return (
              <Grid item xs={12} md={6}>
                <img className="w-100" src={item?.image} alt="App 1" />
              </Grid>
            );
          })}
        </Grid>
        <Grid container className="d-flex flex-column">
          {arrColumnThree?.map((item) => {
            return (
              <Grid item xs={12} md={6}>
                <img className="w-100" src={item?.image} alt="App 1" />
              </Grid>
            );
          })}
        </Grid>
      </Box> */}
      </Box>
    </>
  );
};

export default PortfolioSection;
