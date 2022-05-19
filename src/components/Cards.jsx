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
function Cards({ headline, cost, desc, raise, active, percentageData }) {
  return (
    <Card
      sx={{
        maxWidth: 330,
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
              color: "#B2B2CA",
              fontSize: "11px",
            }}
          >
            {headline}
          </Typography>
          <Typography
            component="div"
            variant="h6"
            style={{ color: "#383874", fontWeight: "600" }}
          >
            {cost}
          </Typography>
          <Typography
            color="#C3C4D2"
            component="div"
            style={{ fontSize: "13px" }}
          >
            <b style={{ color: "gray" }}>{percentageData}</b> {desc}
          </Typography>
          {active !== "active" ? (
            <Divider
              variant="fullWidth"
              style={{
                position: "absolute",
                top: "70%",
                width: "100%",
                left: "0%",
                zIndex: 999,
              }}
            />
          ) : (
            ""
          )}
          <Box
            sx={{
              position: "absolute",
              top: "70%",
              width: "100%",
              padding: "10px",
              left: "0%",
            }}
            className={active}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "91%",
                marginLeft: "5px",
              }}
              className="bottom-options-cards"
            >
              <Typography variant="subtitle2" component="span">
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
            <CallMadeIcon
              style={{
                color: "gray",
                backgroundColor: "#F8F9FB",
                padding: "8px",
                color: "#21CC9E",
                fontSize: "20px",
                fontWeight: "800",
                borderRadius: "7px",
              }}
            />
          ) : (
            <CallReceivedIcon
              style={{
                color: "gray",
                backgroundColor: "#F8F9FB",
                padding: "8px",
                color: "#21CC9E",
                fontSize: "20px",
                fontWeight: "800",
                borderRadius: "7px",
              }}
            />
          )}
        </CardContent>
      </Box>
    </Card>
  );
}

export default Cards;
