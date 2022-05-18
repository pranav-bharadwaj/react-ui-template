import { Divider, Grid } from "@mui/material";
import React from "react";
import CallMadeIcon from "@mui/icons-material/CallMade";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import "../css/Containercss.css";
function Cards({ headline, cost, desc, raise, active }) {
  return (
    <Card
      sx={{
        maxWidth: 350,
        minHeight: 130,
        maxHeight: 200,
        display: "flex",
        position: "relative",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            component="div"
            variant="subtitle2"
            style={{
              textTransform: "uppercase",
              color: "gray",
              fontSize: "11px",
            }}
          >
            {headline}
          </Typography>
          <Typography component="div" variant="h6" style={{ color: "#383874" }}>
            {cost}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            component="div"
          >
            <b>20%</b> {desc}
          </Typography>
          <Divider
            style={{
              position: "absolute",
              top: "70%",
              width: "100%",
              left: "0%",
              zIndex: 999,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "70%",
              width: "100%",
              padding: "10px",
              left: "0%",
            }}
            className={active}
            // style={{ backgroundColor: active === "true" ? "#8676FF" : "white" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "90%",
                marginLeft: "5px",
              }}
              className="bottom-options-cards"
            >
              <Typography
                variant="subtitle2"
                component="span"
                // style={{ color: "#8676FF" }}
              >
                See details
              </Typography>
              <KeyboardDoubleArrowRightIcon
                className="bottom-options-cards-icon"
                // style={{ color: "#383874", display: "flex" }}
              />
            </div>
          </Box>
        </CardContent>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          {raise === "true" ? (
            <CallMadeIcon style={{ color: "gray" }} />
          ) : (
            <CallReceivedIcon style={{ color: "gray" }} />
          )}
        </CardContent>
      </Box>
    </Card>
  );
}

export default Cards;
