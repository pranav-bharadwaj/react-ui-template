import React from "react";
import Sidebarbottom from "./Sidebarbottom";
import SidebarTopmenu from "./SidebarTopmenu";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import "../../css/sidebar.css";

function SidebarMain() {
  return (
    <Box
      sx={{ width: 280, height: "100%" }}
      className="side-menu-top-main"
      style={{ position: "absolute" }}
    >
      <List
        component="nav"
        sx={{
          width: "100%",
        }}
      >
        <div className="sidebar_parent_class">
          <SidebarTopmenu />
          <Sidebarbottom />
        </div>
      </List>
      <Divider
        orientation="vertical"
        sx={{ position: "absolute", left: "85%", top: "0%", height: "120vh" }}
      />
    </Box>
  );
}

export default SidebarMain;
