import React, { useState } from "react";
import "./style/client-section-style.css";
import Client1 from "../../assets/images/client-1.png";
import Client2 from "../../assets/images/client-2.png";
import Client3 from "../../assets/images/client-3.png";
import Client4 from "../../assets/images/client-4.png";
import Client5 from "../../assets/images/client-5.png";
import Client6 from "../../assets/images/client-6.png";
import Client7 from "../../assets/images/client-7.png";
import Client8 from "../../assets/images/client-8.png";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const ClientSection = () => {
  const clientImages = [
    Client1,
    Client2,
    Client3,
    Client4,
    Client5,
    Client6,
    Client7,
    Client8,
  ];

  return (
    <>
      <Box className="">
        <h1 className="montserrat-font fw-bold font-dark-grey text-center">
          Clients
        </h1>
      </Box>
      <Box className="container mb-5">
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {clientImages?.map((item) => {
            return (
              <SwiperSlide>
                <Box className="d-flex align-content-center my-5" height={40}>
                  <img className="img-fluid" src={item} alt="Clients" />
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </>
  );
};
export default ClientSection;
