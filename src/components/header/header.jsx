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
import "./style/header-style.css";


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
      <Typography
        variant="h6"
        sx={{ my: 2, fontWeight: "bold", fontFamily: "Montserrat, sans-serif" }}
      >
        RAPID
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                primary={item}
                sx={{ fontFamily: "Montserrat, sans-serif" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <IconButton size="large" aria-label="" color="inherit">
        <TwitterIcon sx={{ marginRight: "10px" }} />
        <FacebookIcon sx={{ marginRight: "10px" }} />
        <LinkedInIcon sx={{ marginRight: "10px" }} />
        <InstagramIcon sx={{ marginRight: "10px" }} />
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

          <AppBar
            // style={{ background: "none", boxShadow: "none" }}
            component="nav"
          >
            <Toolbar className="container mt-3">
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { sm: "block" },
                  color: "#413E66",
                  fontSize: "32px",
                  fontWeight: "400",
                  fontFamily: "Montserrat, sans-serif",
                  letterSpacing: "3px",
                }}
              >
                RAPID
              </Typography>

              <Box sx={{ display: { xs: "none", lg: "block" } }}>
                {navItems.map((item) => (
                  <Button
                    key={item}
                    sx={{
                      color: "#413E66",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>

              <Box sx={{ display: { xs: "block" } }}>
                <IconButton size="large" aria-label="" color="inherit">
                  <TwitterIcon sx={{ color: "#413E66" }} />
                </IconButton>
                <IconButton>
                  <FacebookIcon sx={{ color: "#413E66" }} />
                </IconButton>
                <IconButton>
                  <LinkedInIcon sx={{ color: "#413E66" }} />
                </IconButton>
                <IconButton>
                  <InstagramIcon sx={{ color: "#413E66" }} />
                </IconButton>
              </Box>

              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { sm: "none", md: "block" } }}
              >
                <MenuIcon
                  sx={{
                    color: "#514E7F",
                    ml: "15px",
                    display: { md: "block", lg: "none" },
                  }}
                />
              </IconButton>
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
                display: { md: "none" },
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
