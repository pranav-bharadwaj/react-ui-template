import React from "react";
import SidebarTopmenu from "./SidebarTopmenu";
import List from "@mui/material/List";
import "../../css/sidebar.css";

function SidebarMain({ anchor }) {
  return (
    <List>
      <div className="sidebar_parent_class">
        <SidebarTopmenu />
      </div>
    </List>
  );
}

export default SidebarMain;
