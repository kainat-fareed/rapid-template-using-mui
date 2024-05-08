import React from "react";
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
import { Box } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LinkIcon from "@mui/icons-material/Link";

const PortfolioSection = () => {
  const PortfolioImages = [
    {
      image: { App1Image },
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
      image: { App2Image },
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
      image: { App3Image },
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
      image: { Card1Image },
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

    {
      image: { Card2Image },
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
      image: { Card3Image },
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

  return (
    <>
      <Box>
        <h1>Our Portfolio</h1>
        <ul>
          <li>All</li>
          <li>App</li>
          <li>Card</li>
          <li>Web</li>
        </ul>
      </Box>
    </>
  );
};

export default PortfolioSection;
