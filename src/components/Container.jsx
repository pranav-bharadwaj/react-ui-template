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
    <div className="container-parent-class">
      <Grid container spacing={2} direction="row">
        <Grid item>
          <SidebarMain />
        </Grid>

        <Grid
          item
          spacing={3}
          direction="row"
          xs
          style={{ marginLeft: "16rem" }}
        >
          <Grid container direction="column">
            <Topsearchbar />
            <Grid container spacing={2} direction="row">
              <Grid item xs>
                <Grid container direction="row" spacing={2} alignItems="center">
                  <Grid item xs={8}>
                    <div className="container-headline-user">
                      <h3>Hi,Albert Tristian</h3>
                      <p>Welcome back to analyze</p>
                    </div>
                  </Grid>
                  <Grid item xs>
                    <Stack
                      direction="row"
                      spacing={2}
                      alignContent="center"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Button
                        variant="outlined"
                        endIcon={<ShareIcon />}
                        size="small"
                      >
                        Share
                      </Button>
                      <Button
                        variant="contained"
                        endIcon={<FileDownloadIcon />}
                        size="small"
                      >
                        Export
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={3} direction="row">
              <Grid item xs>
                <Cards
                  headline="Total Income"
                  cost="$589,209.78"
                  desc="increased compared to last week"
                  raise="true"
                  active="deactive"
                />
              </Grid>
              <Grid item xs>
                <Cards
                  headline="Total expense"
                  cost="$120,458.90"
                  desc="decrease compared to last week"
                  raise="false"
                  active="deactive"
                />
              </Grid>
              <Grid item xs>
                <Cards
                  headline="Total visitors"
                  cost="502,903"
                  desc="increased compared to last week"
                  raise="true"
                  active="active"
                />
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={18}>
                <Graph />
              </Grid>
            </Grid>
            <Grid item>
              <h4 style={{ color: "#383874" }}>Order list</h4>
              <BottomTable />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
