import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Logo from "../../assets/logo.png";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "../../css/sidebar.css";
import { style } from "@mui/system";
const theme = createTheme({
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: "5px",
          color: "#ADAEC2",
          "&:focus": {
            color: "#8676FF",
            backgroundColor: "#F8F9FB",
          },
        },
      },
    },
    MuiListItem: {
      defaultProps: {
        dense: true,
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          marginRight: "-1rem",
          color: "#ADAEC2",
        },
      },
    },
    MuiListItemText: {
      defaultProps: {
        primaryTypographyProps: {
          fontFamily: "Roboto",
          fontWeight: "500",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          fontSize: "10px",
          "&:focus": {
            color: "#8676FF",
            backgroundColor: "#F8F9FB",
          },
        },
      },
    },
  },
});
function SidebarTopmenu() {
  return (
    <Box sx={{ width: 280 }} className="side-menu-top-main">
      <ThemeProvider theme={theme}>
        <div>
          <div className="logo_main">
            <img src={Logo} alt="logo" width={25} />
            <span className="logo_typo_parent">
              <h3 className="logo_typo">Analyze.</h3>
            </span>
          </div>

          <List
            component="nav"
            sx={{
              width: "80%",
            }}
          >
            <ListItem>
              <ListItemButton
                className="sidebar-menu-button"
                sx={{ color: "#8676FF", backgroundColor: "#F8F9FB" }}
              >
                <ListItemIcon>
                  <GridViewOutlinedIcon
                    className="icons_styles"
                    sx={{ color: "#8676FF" }}
                  />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton className="sidebar-menu-button">
                <ListItemIcon>
                  <CategoryOutlinedIcon className="icons_styles" />
                </ListItemIcon>

                <ListItemText primary="Products" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton className="sidebar-menu-button">
                <ListItemIcon component="text">
                  <FavoriteBorderOutlinedIcon className="icons_styles" />
                </ListItemIcon>
                <ListItemText primary="Favorites" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton className="sidebar-menu-button">
                <ListItemIcon>
                  <ChatBubbleOutlineOutlinedIcon className="icons_styles" />
                </ListItemIcon>

                <ListItemText primary="Messages" />
                <ListItemText
                  primary="3"
                  primaryTypographyProps={{ fontSize: "12px" }}
                  sx={{
                    backgroundColor: "#FF708B",
                    marginLeft: "2px",
                    textAlign: "center",
                    borderRadius: "3px",
                    color: "white",
                    maxWidth: "1.2rem",
                  }}
                ></ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton className="sidebar-menu-button">
                <ListItemIcon>
                  <ListOutlinedIcon className="icons_styles" />
                </ListItemIcon>
                <ListItemText primary="Order Lists" />
                <ListItemText
                  primary="2"
                  primaryTypographyProps={{ fontSize: "12px" }}
                  sx={{
                    backgroundColor: "#FF708B",
                    marginLeft: "2px",
                    textAlign: "center",
                    borderRadius: "3px",
                    color: "white",
                    maxWidth: "1.2rem",
                  }}
                ></ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton className="sidebar-menu-button">
                <ListItemIcon>
                  <Inventory2OutlinedIcon className="icons_styles" />
                </ListItemIcon>
                <ListItemText primary="Product Stock" />
              </ListItemButton>
            </ListItem>

            <Divider />

            <ListItem>
              <h4 style={{ color: "#ADAEC2", fontWeight: "500" }}>Account</h4>
            </ListItem>

            <ListItem>
              <ListItemButton className="sidebar-menu-button">
                <ListItemIcon>
                  <SettingsOutlinedIcon className="icons_styles" />
                </ListItemIcon>
                <ListItemText primary="Settings" />
                <ListItemText
                  primary="2"
                  primaryTypographyProps={{ fontSize: "12px" }}
                  sx={{
                    backgroundColor: "#FF708B",
                    marginLeft: "2px",
                    textAlign: "center",
                    borderRadius: "3px",
                    color: "white",
                    maxWidth: "1.2rem",
                  }}
                ></ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton className="sidebar-menu-button">
                <ListItemIcon>
                  <AutoAwesomeOutlinedIcon className="icons_styles" />
                </ListItemIcon>
                <ListItemText primary="Themes" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton className="sidebar-menu-button">
                <ListItemIcon>
                  <HelpOutlineOutlinedIcon className="icons_styles" />
                </ListItemIcon>
                <ListItemText primary="Helps" />
              </ListItemButton>
            </ListItem>
          </List>
        </div>
      </ThemeProvider>
    </Box>
  );
}

export default SidebarTopmenu;
