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
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          border: "2px solid #D7E4EE",
        },
      },
    },
  },
});
function CardWithShadow({
  headline,
  cost,
  desc,
  raise,
  active,
  percentageData,
}) {
  return (
    <Card
      sx={{
        maxWidth: 335,
        minHeight: 135,
        maxHeight: 200,

        display: "flex",
        position: "relative",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
      className={active}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 0" }}>
          <Typography
            component="div"
            style={{
              textTransform: "uppercase",
              color: "#A0A0BD",
              fontSize: "11px",
            }}
          >
            {headline}
          </Typography>
          <Typography
            component="div"
            variant="h6"
            style={{
              color: "#383874",
              fontWeight: "700",
              fontSize: "22px",
              fontFamily: "Open Sans",
            }}
          >
            {cost}
          </Typography>
          <Typography
            color="#C3C4D2"
            component="div"
            style={{ fontSize: "13px", fontWeight: "400" }}
          >
            <b style={{ color: "#21CC9E" }}>{percentageData}</b> {desc}
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
function CardWithoutShadow({
  headline,
  cost,
  desc,
  raise,
  active,
  percentageData,
}) {
  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          maxWidth: 335,
          minHeight: 130,
          maxHeight: 200,
          display: "flex",
          position: "relative",
        }}
        className={active}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              component="div"
              style={{
                textTransform: "uppercase",
                color: "#A0A0BD",
                fontSize: "11px",
              }}
            >
              {headline}
            </Typography>
            <Typography
              component="div"
              variant="h6"
              style={{
                color: "#383874",
                fontWeight: "700",
                fontSize: "22px",
                fontFamily: "Open Sans",
              }}
            >
              {cost}
            </Typography>
            <Typography
              color="#C3C4D2"
              component="div"
              style={{ fontSize: "13px", fontWeight: "400" }}
            >
              <b style={{ color: "#21CC9E" }}>{percentageData}</b> {desc}
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
    </ThemeProvider>
  );
}
function Cards({ headline, cost, desc, raise, active, percentageData }) {
  return (
    <>
      {active === "active" ? (
        <CardWithShadow
          headline={headline}
          cost={cost}
          desc={desc}
          raise={raise}
          active={active}
          percentageData={percentageData}
        />
      ) : (
        <CardWithoutShadow
          headline={headline}
          cost={cost}
          desc={desc}
          raise={raise}
          active={active}
          percentageData={percentageData}
        />
      )}
    </>
  );
}

export default Cards;
