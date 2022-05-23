import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Typography from "@mui/material/Typography";
import { IconButton, ListItemIcon } from "@mui/material";
import AvatarImg from "../../assets/iconping.jpg";
function Sidebarbottom() {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 270,
        bgcolor: "background.paper",
        marginTop: "5rem",
      }}
    >
      <Divider sx={{ width: "88%" }} />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={AvatarImg} />
        </ListItemAvatar>
        <ListItemText
          primary="Albert Tristian"
          style={{ color: "#383874" }}
          primaryTypographyProps={{ fontSize: "15px", fontWeight: 600 }}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline", fontSize: "12px" }}
                component="p"
                variant="body3"
                rem
                color="grey"
              >
                Sr Manager
              </Typography>
            </React.Fragment>
          }
        />
        <IconButton />
        <ListItemIcon>
          <KeyboardArrowDownIcon />
        </ListItemIcon>
      </ListItem>
    </List>
  );
}

export default Sidebarbottom;
