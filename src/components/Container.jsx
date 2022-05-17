import React from "react";
import SidebarMain from "./SidebarComponents/SidebarMain";
import Topsearchbar from "./Topsearchbar";
import "../css/Containercss.css";
import { Grid } from "@mui/material";
export default function Container() {
  return (
    <div className="container-parent-class">
      <Grid container spacing={2}>
        <SidebarMain />
        <Topsearchbar />
      </Grid>
      
    </div>
  );
}
