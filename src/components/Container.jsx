import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ShareIcon from "@mui/icons-material/Share";
import "../css/Containercss.css";
import { Card, Grid } from "@mui/material";
import Cards from "./Cards";
import Graph from "./Graph";
import { makeStyles } from "@mui/styles";
import BottomTable from "./BottomTable";
import { Box } from "@mui/system";
import Piegraph from "./Piegraph";

const useStyles = makeStyles((theme) => ({
  user_headline: {
    color: "#383874",
    fontWeight: 520,
  },
  user_welocome: {
    color: "#B8B9C9",
    fontSize: "13px",
    textTransform: "lowercase",
  },
  table_content: {
    [theme.breakpoints.up("md")]: {
      width: "100px ",
    },
    [theme.breakpoints.up("sm")]: {
      width: "100px",
    },
    [theme.breakpoints.up("xs")]: {
      width: "100px",
    },
  },
}));
export default function Container() {
  const classes = useStyles();

  return (
    <Box>
      <Grid
        container
        sx={{ marginTop: { xs: "4rem", md: "5rem", sm: "5rem", lg: "6rem" } }}
        justifyContent="space-between"
        xs={12}
      >
        <Grid item>
          <Box sx={{ lineHeight: "0.2" }}>
            <h3 className={classes.user_headline}>Hi,&nbsp;Albert Tristian</h3>
            <p className={classes.user_welocome}>Welcome back to analyze</p>
          </Box>
        </Grid>
        <Grid item>
          <Stack direction="row" spacing={2} justifyContent="flex-start">
            <Button
              sx={{ width: "7rem", border: "2px solid #8676FF" }}
              variant="outlined"
              style={{ textTransform: "capitalize" }}
              endIcon={<ShareIcon />}
            >
              Share
            </Button>
            <Button
              sx={{ width: "7rem" }}
              variant="contained"
              style={{ textTransform: "capitalize" }}
              endIcon={<FileDownloadIcon />}
            >
              Export
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent={"space-between"}
        spacing={3}
        sx={{ marginTop: "0.5rem" }}
      >
        <Grid item>
          <Cards
            headline={"Total Income"}
            cost={"$589,209.78"}
            desc={"increased compared to last week"}
            raise={"true"}
            percentageData={"20%"}
            active={"deactive"}
          />
        </Grid>
        <Grid item>
          <Cards
            headline={"Total expense"}
            cost={"$120,458.90"}
            desc={"decrease compared to last week"}
            raise={"false"}
            percentageData={"10%"}
            active={"deactive"}
          />
        </Grid>
        <Grid item>
          <Cards
            headline="Total visitors"
            cost="502,903"
            desc="increased compared to last week"
            raise="true"
            percentageData={"85%"}
            active="active"
          />
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ marginTop: "0.5rem" }}
        justifyContent={"space-between"}
        alignSelf={"center"}
        alignContent="center"
        spacing={3}
      >
        <Grid item lg={7.8} md={9} sm={12} xs={12}>
          <Graph />
        </Grid>
        <Grid item lg={3.5} md={4} sm={12} xs={12}>
          <Piegraph />
        </Grid>
      </Grid>
      <Grid container className={classes.table_content}>
        <Grid item lg={12} md={12} xs={12}>
          <BottomTable />
        </Grid>
      </Grid>
    </Box>
  );
}
