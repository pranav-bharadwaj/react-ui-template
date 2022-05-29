import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "./components/Container";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Avatar, ListItemAvatar, Stack } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import SidebarMain from "./components/SidebarComponents/SidebarMain";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AvatarImg from "./assets/iconping.jpg";

const drawerWidth = 240;
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "10px",
  color: "black",
  border: "1.5px solid  #D7E4EE",
  backgroundColor: alpha(theme.palette.common.white, 0.05),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.08),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  color: "gray",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "25ch",
    },
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <SidebarMain />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
          borderBottom: "1px solid gray ",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "#6D78FE" }}
          >
            <MenuIcon />
          </IconButton>
          <Stack direction="row" justifyContent={"space-between"} width="100%">
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  justifyContent: "space-around",
                  width: "5rem",
                  alignItems: "center",
                  padding: "5px",
                  borderRadius: "5px",
                  backgroundColor: "#F8F9FB",
                }}
              >
                <Typography
                  sx={{
                    color: "#051c78",
                    fontWeight: "500",
                    backgroundColor: "#E8ECF2",
                    padding: "3px 10px",
                    borderRadius: "5px",
                    fontSize: "14px",
                  }}
                >
                  EN
                </Typography>
                <Typography
                  sx={{
                    color: "gray",
                    fontWeight: "400",
                    padding: "3px",
                  }}
                >
                  ID
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: "#B8B9C9",
                  marginLeft: "1rem",
                  fontSize: "14px",
                  display: { xs: "none", md: "flex" },
                }}
              >
                English
              </Typography>
            </Box>

            <Box
              sx={{
                display: { xs: "flex", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <NotificationsNoneIcon
                sx={{
                  color: "gray",
                  fontSize: "35px",
                  padding: "8px",
                  backgroundColor: "#F8F9FB",
                  borderRadius: "50%",
                  display: { md: "flex", xs: "none" },
                }}
              />
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search or type keywords"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <NotificationsNoneIcon
                sx={{
                  color: "gray",
                  fontSize: "35px",
                  padding: "8px",
                  backgroundColor: "#F8F9FB",
                  borderRadius: "50%",
                  display: { md: "none", xs: "block" },
                }}
              />
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },

            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
          <BottomInfoUser />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
          <BottomInfoUser />
        </Drawer>
      </Box>
      <Box
        sx={{
          marginLeft: { sm: 32, lg: 35, xs: 3 },
          marginRight: { sm: 5, xs: 2 },
        }}
      >
        <Container />
      </Box>
    </Box>
  );
}
const BottomInfoUser = () => {
  return (
    <Box
      sx={{
        height: "50px",
        width: "100%",
        position: "absolute",
        top: { xs: "88%", sm: "90%", md: "90%", lg: "90%" },
      }}
    >
      <Divider />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar alt="" src={AvatarImg} sx={{ marginLeft: "20px" }} />
        <Box
          sx={{
            width: "100%",
            marginLeft: "15px",
            padding: "1rem 0px",
          }}
        >
          <Typography
            component="div"
            variant="div"
            sx={{
              fontSize: "15px",
              fontWeight: "bold",
              color: "#383874",
            }}
          >
            Albert Tristian
          </Typography>
          <Typography
            component="div"
            variant="body2"
            sx={{
              fontSize: "13px",
              color: "#39D1A8",
            }}
          >
            Sr. Manager
          </Typography>
        </Box>
        <IconButton>
          <KeyboardArrowDownIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ResponsiveDrawer;
