import React from "react";
import Sidebarbottom from "./Sidebarbottom";
import SidebarTopmenu from "./SidebarTopmenu";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import "../../css/sidebar.css";
import { Drawer, ListItem } from "@mui/material";
const drawerWidth = 245;
function SidebarMain() {
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Drawer
      anchor={"left"}
      open={true}
      disableScrollLock={true}
      variant="temporary"
      hideBackdrop={true}
      PaperProps={{
        width: 250,
        overflow: "auto",
        height: "100%",
      }}
      // container={container}
      sx={{
        position: "relative",
        "& .MuiPaper-root": {
          height: "100vh",

          backgroundColor: "red",
        },
        "& .MuiDrawer-root": {
          width: 200,
          position: "absolute",
          transition: "none !important",
        },
      }}
    >
      <List component="nav">
        <div className="sidebar_parent_class">
          <SidebarTopmenu />
        </div>
      </List>
    </Drawer>
  );
}

export default SidebarMain;
