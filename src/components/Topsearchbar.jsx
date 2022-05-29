import React from "react";
import Grid from "@mui/material/Grid";
import { alpha } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import "../css/Containercss.css";
import InputBase from "@mui/material/InputBase";
import NotificationsActiveTwoToneIcon from "@mui/icons-material/NotificationsActiveTwoTone";
import { Divider } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import notification from "../assets/notification.png";
//for search options
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "10px",
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
    [theme.breakpoints.up("xs")]: {
      width: "20ch",
    },
  },
}));
function Topsearchbar() {
  return (
    <div className="Topsearch-main-class">
      <Grid container spacing={2}>
        <Grid item lg={6} md={4} sm={3} xs={8}>
          <div className="Topsearch-grid-one-main">
            <div className="Topsearch-grid-one-child">
              <span
                style={{
                  backgroundColor: "#E8ECF2",
                  padding: "7px",
                  width: "30%",
                  textAlign: "center",
                  borderRadius: "5px",
                  color: "#051c78",
                  fontWeight: "500",
                }}
              >
                EN
              </span>
              <span
                style={{
                  padding: "7px",
                }}
              >
                ID
              </span>
            </div>
            <span style={{ color: "#B8B9C9" }}>English</span>
          </div>
        </Grid>

        <Grid item lg={6} md={4} sm={3} xs={8}>
          <div className="Topsearch-grid-two-child">
            <NotificationsNoneIcon
              sx={{
                color: "gray",
                fontSize: "20px",
                padding: "8px",
                backgroundColor: "#F8F9FB",
                borderRadius: "50%",
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
          </div>
        </Grid>
      </Grid>
      <Divider
        sx={{
          left: "-2.5%",
          top: "95%",
        }}
      />
    </div>
  );
}

export default Topsearchbar;
