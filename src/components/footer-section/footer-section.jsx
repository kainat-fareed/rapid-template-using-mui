import React, { useState } from "react";
import "./style/footer-section-style.css";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const FooterSection = () => {
  
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const FormHandler = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Box className="footer-bg">
        <Grid container gap={4} className="container py-5 ">
          <Grid item xs={12} lg={5.7} className="d-flex">
            <Grid item xs={12} lg={6}>
              <Box className="mx-4">
                <h1 className="text-36 montserrat-font font-dark-grey">
                  Rapid
                </h1>
                <p className="footer-para1 montserrat-font my-3">
                  Cras fermentum odio eu feugiat lide par naso tierra. Justo
                  eget nada terra videa magna derita valies darta donna mare
                  fermentum iaculis eu non diam phasellus. Scelerisque felis
                  imperdiet proin fermentum leo. Amet volutpat consequat mauris
                  nunc congue.
                </p>

                <h1 className="text-14 montserrat-font font-dark-grey fw-bold my-4">
                  Our Newsletter
                </h1>
                <p className="opens-font text-14 footer-text-color">
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna veniam enim veniam illum dolore legam minim
                  quorum culpa amet magna export quem.
                </p>
                <Box className="d-flex">
                  <TextField
                    id="outlined-search"
                    label="Search field"
                    type="search"
                  />
                  <Button variant="contained"> Search</Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <h2 className="opens-font text-14 footer-text-color fw-bold">
                USEFUL LINKS
              </h2>
              <ul className="list-unstyled">
                <li className="opens-font text-14 footer-text-color">Home</li>
                <li className="opens-font text-14 footer-text-color my-3">
                  About us
                </li>
                <li className="opens-font text-14 footer-text-color">
                  Services
                </li>
                <li className="opens-font text-14 footer-text-color my-3">
                  Terms of service
                </li>
                <li className="opens-font text-14 footer-text-color">
                  Privacy policy
                </li>
              </ul>
              <h2 className="opens-font text-14 footer-text-color fw-bold my-4">
                CONTACT US
              </h2>
              <p className="opens-font text-14 footer-text-color">
                A108 Adam Street <br />
                New York, NY 535022
                <br />
                United States <br />
                <strong>Phone:</strong> +1 5589 55488 55
                <br />
                <strong>Email:</strong> info@example.com
                <br />
              </p>
              <Box>
                <IconButton
                  size="medium"
                  aria-label=""
                  className="icon-hover-color"
                >
                  <TwitterIcon sx={{ color: "#1bb1dc" }} className="icon" />
                </IconButton>
                <IconButton
                  size="medium"
                  aria-label=""
                  className="icon-hover-color"
                >
                  <FacebookIcon sx={{ color: "#1bb1dc" }} className="icon" />
                </IconButton>
                <IconButton
                  size="medium"
                  aria-label=""
                  className="icon-hover-color"
                >
                  <LinkedInIcon sx={{ color: "#1bb1dc" }} className="icon" />
                </IconButton>
                <IconButton
                  size="medium"
                  aria-label=""
                  className="icon-hover-color"
                >
                  <InstagramIcon sx={{ color: "#1bb1dc" }} className="icon" />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={5.7}>
            <h1 className="opens-font text-14 footer-text-color fw-bold">
              SEND US A MESSAGE
            </h1>
            <p className="opens-font text-14 footer-text-color">
              Eos ipsa est voluptates. Nostrum nam libero ipsa vero. Debitis
              quasi sit eaque numquam similique commodi harum aut temporibus.
            </p>

            <Box>
              <form>
                <div>
                  <TextField
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={FormHandler}
                    label="Your Name"
                    fullWidth
                  />
                </div>
                <div className="my-2">
                  <TextField
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={FormHandler}
                    label="Your Email"
                    fullWidth
                  />
                </div>
                <div>
                  <TextField
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={FormHandler}
                    label="Subject"
                    fullWidth
                  />
                </div>
                <div className="my-2">
                  <TextField
                    name="message"
                    type="text"
                    value={formData.message}
                    onChange={FormHandler}
                    label="Message"
                    multiline
                    fullWidth
                    maxRows={4}
                  />
                </div>
                <Button
                  variant="contained"
                  type="button"
                  className="d-flex justify-content-center mt-4"
                  onClick={submitHandler}
                >
                  Send Message
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default FooterSection;
