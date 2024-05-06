import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

// import BackgroundImage from "../../assets/images/intro-bg.jpg";

const drawerWidth = 300;
const navItems = [
  "HOME",
  "ABOUT",
  "SERVICES",
  "PORTFOLIO",
  "TEAM",
  "DROP DOWN",
  "CONTACT",
];

const MuiAppBar = (props) => {
  const { window } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        RAPID
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <IconButton size="large" aria-label="" color="inherit">
        <TwitterIcon />
        <FacebookIcon />
        <LinkedInIcon />
        <InstagramIcon />
      </IconButton>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <div>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />

          <AppBar  style={{ background: "none", boxShadow:'none' }} component="nav">
            <Toolbar className="container">
              <Box className="d-flex d-block d-md-none " sx={{border: '1px solid red', width:'100%', justifyContent:'flex-end'}}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } , }}
              >
                <MenuIcon sx={{color: '#514E7F'}} />
              </IconButton>
              </Box>

              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  color: "#413E66",
                  fontSize: "28px",
                  fontWeight: "400",
                  fontFamily: `"Montserrat", sans-serif`,
                  letterSpacing: "3px",
                  display: { xs: "none", sm: "block" },
                }}
              >
                RAPID
              </Typography>

              <Box>
                {navItems.map((item) => (
                  <Button
                    key={item}
                    sx={{ color: "#413E66", fontWeight: "bold" }}
                  >
                    {item}
                  </Button>
                ))}

                <IconButton size="large" aria-label="" color="inherit">
                  <TwitterIcon sx={{ color: "#514E7F" }} />
                </IconButton>
                <IconButton>
                  <FacebookIcon sx={{ color: "#514E7F" }} />
                </IconButton>
                <IconButton>
                  <LinkedInIcon sx={{ color: "#514E7F" }} />
                </IconButton>
                <IconButton>
                  <InstagramIcon sx={{ color: "#514E7F" }} />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>

          <nav>
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { md: "none"},
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </nav>
          <Toolbar />
        </Box>
      </div>
    </>
  );
};
export default MuiAppBar;
