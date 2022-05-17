import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import "../css/Containercss.css";
import InputBase from "@mui/material/InputBase";
import NotificationsActiveTwoToneIcon from "@mui/icons-material/NotificationsActiveTwoTone";
import { Divider } from "@mui/material";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "start",
  color: theme.palette.text.secondary,
}));
//for search options
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.08),
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
      width: "20ch",
    },
  },
}));
function Topsearchbar() {
  return (
    <div className="Topsearch-main-class">
      <Grid container spacing={2}>
        <Grid item xs>
          <div className="Topsearch-grid-one-main">
            <div className="Topsearch-grid-one-child">
              <span
                style={{
                  backgroundColor: "#E8ECF2",
                  padding: "5px",
                  width: "30%",
                  textAlign: "center",
                  borderRadius: "5px",
                  color: "#051c78",
                }}
              >
                EN
              </span>
              <span>ID</span>
            </div>
            <span>English</span>
          </div>
        </Grid>

        <Grid item xs>
          <div className="Topsearch-grid-two-child">
            <NotificationsActiveTwoToneIcon
              sx={{
                color: "gray",
                fontSize: "20px",
                padding: "8px",
                backgroundColor: "#e7ebf3",
                borderRadius: "50%",
              }}
            />
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </div>
        </Grid>
      </Grid>
      <Divider
        sx={{ position: "absolute", width: "104%", left: "-3%", top: "80%" }}
      />
    </div>
  );
}

export default Topsearchbar;
