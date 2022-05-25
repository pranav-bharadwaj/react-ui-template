import React from "react";
import SidebarMain from "./SidebarComponents/SidebarMain";
import Topsearchbar from "./Topsearchbar";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ShareIcon from "@mui/icons-material/Share";
import "../css/Containercss.css";
import { Card, Grid } from "@mui/material";
import Cards from "./Cards";
import Graph from "./Graph";

import BottomTable from "./BottomTable";
export default function Container() {
  return (
    <div className="container-parent-class" style={{ width: "99%" }}>
      <Grid container spacing={2} direction="row">
        <Grid
          item
          spacing={3}
          direction="row"
          xs
          style={{ marginLeft: "16rem" }}
        >
          <Grid container direction="column">
            <Grid item>
              <Topsearchbar />
            </Grid>

            <Grid container spacing={2} direction="row">
              <Grid item xs>
                <Grid container direction="row" spacing={2} alignItems="center">
                  <Grid item lg={6} md={4} sm={12} xs={12}>
                    <div className="container-headline-user">
                      <h3>Hi,&nbsp;Albert Tristian</h3>
                      <p>Welcome back to analyze</p>
                    </div>
                  </Grid>
                  <Grid item lg={6} md={4} sm={8} xs={8}>
                    <Stack
                      direction="row"
                      spacing={2}
                      width={"85%"}
                      alignContent="center"
                      alignItems="center"
                      justifyContent="flex-end"
                    >
                      <Button
                        variant="outlined"
                        style={{ textTransform: "capitalize" }}
                        endIcon={<ShareIcon />}
                      >
                        Share
                      </Button>
                      <Button
                        variant="contained"
                        style={{ textTransform: "capitalize" }}
                        endIcon={<FileDownloadIcon />}
                      >
                        Export
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={4} direction="row">
              <Grid item lg={4} md={4}>
                <Cards
                  headline={"Total Income"}
                  cost={"$589,209.78"}
                  desc={"increased compared to last week"}
                  raise={"true"}
                  percentageData={"20%"}
                  active={"deactive"}
                />
              </Grid>
              <Grid item lg={4} md={4}>
                <Cards
                  headline={"Total expense"}
                  cost={"$120,458.90"}
                  desc={"decrease compared to last week"}
                  raise={"false"}
                  percentageData={"10%"}
                  active={"deactive"}
                />
              </Grid>
              <Grid item lg={4} md={4}>
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
            <Grid container spacing={1}>
              <Grid item xs={12} sx={{ marginTop: "1.5rem" }}>
                <Graph />
              </Grid>
            </Grid>
            <Grid item xs>
              <h4 style={{ color: "#383874" }}>Order list</h4>
              <BottomTable />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
