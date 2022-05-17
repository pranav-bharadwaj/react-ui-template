import React from "react";
import Sidebarbottom from "./Sidebarbottom";
import SidebarTopmenu from "./SidebarTopmenu";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import "../../css/sidebar.css";

function SidebarMain() {
  return (
    <Box sx={{ width: 280 }} className="side-menu-top-main">
      <List
        component="nav"
        sx={{
          width: "100%",
        }}
      >
        <div className="side-menu-liner"></div>
        <div className="sidebar_parent_class">
          <SidebarTopmenu />
          <Sidebarbottom />
        </div>
      </List>
    </Box>
  );
}

export default SidebarMain;
