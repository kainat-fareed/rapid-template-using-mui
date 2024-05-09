import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Avatar, Box } from "@mui/material";
import Testimonial1 from "../../assets/images/testimonial-1.jpg";
import Testimonial2 from "../../assets/images/testimonial-2.jpg";
import Testimonial3 from "../../assets/images/testimonial-3.jpg";
import Testimonial4 from "../../assets/images/testimonial-4.jpg";

const TestimonialSection = () => {
  const arrOneTestimonial = [
    {
      image: Testimonial1,
      name: "Saul Goodman",
      occupation: "Ceo & Founder",
      descp:
        "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    },
    {
      image: Testimonial2,
      name: "Sara Wilsson",
      occupation: "Designer",
      descp:
        "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    },
    {
      image: Testimonial3,
      name: "Jena Karlis",
      occupation: "Store Owner",
      descp:
        "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
    },
  ];

  return (
    <div>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {arrOneTestimonial?.map((item) => {
          return (
            <SwiperSlide>
              <Box className="d-flex justify-content-center my-5">
                <Box className="d-flex" width={800}>
                  <Box>
                    <Avatar
                      alt="Remy Sharp"
                      src={item.image}
                      sx={{ width: 90, height: 90 }}
                    />
                  </Box>
                  <Box className="mx-3">
                    <h2 className="text-20 montserrat-font fw-bold">
                      {item.name}
                    </h2>
                    <h3 className="text-14 montserrat-font ">
                      {item.occupation}
                    </h3>
                    <p className="opens-font text-16 text-secondary fst-italic">
                      {item.descp}
                    </p>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TestimonialSection;

// import React from "react";
// import "./style/testimonial-section.css";
// import { Box, Grid } from "@mui/material";
// import Testimonial1 from "../../assets/images/testimonial-1.jpg";
// import Testimonial2 from "../../assets/images/testimonial-2.jpg";
// import Testimonial3 from "../../assets/images/testimonial-3.jpg";
// import Testimonial4 from "../../assets/images/testimonial-4.jpg";

// const TestimonialSection = () => {
//   const arrOneTestimonial = [
//     {
//       image: Testimonial1,
//       name: "Saul Goodman",
//       occupation: "Ceo & Founder",
//       descp:
//         "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
//     },
//   ];

//   const arrTwoTestimonial = [
//     {
//       image: Testimonial2,
//       name: "Sara Wilsson",
//       occupation: "Designer",
//       descp:
//         "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
//     },
//   ];

//   const arrThreeTestimonial = [
//     {
//       image: Testimonial3,
//       name: "Jena Karlis",
//       occupation: "Store Owner",
//       descp:
//         "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
//     },
//   ];

//   const arrFourTestimonial = [
//     {
//       image: Testimonial4,
//       name: "Matt Brandon",
//       occupation: "Freelancer",
//       descp:
//         "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
//     },
//   ];

//   return (
//     <>
//       <h1 className="text-36 montserrat-font fw-bold font-dark-grey text-center mt-5">
//         Testimonials
//       </h1>

//       <Grid container justifyContent={"center"} className="my-5">
//         <Grid item sm={12} md={8}>
//           {arrOneTestimonial?.map((item) => {
//             return (
//               <Box className="d-flex">
//                 <Box>
//                 <img
//                   className="testimonial-img"
//                   src={item.image}
//                   alt="testimonial one"
//                 />
//                 </Box>
//                 <Box className="mx-3">
//                 <h2 className="text-20 montserrat-font fw-bold">{item.name}</h2>
//                 <h3 className="text-14 montserrat-font ">{item.occupation}</h3>
//                 <p className="opens-font text-16 text-secondary fst-italic">{item.descp}</p>
//                 </Box>
//               </Box>
//             );
//           })}
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// export default TestimonialSection;
