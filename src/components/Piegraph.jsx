import { Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box } from "@mui/system";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import Product from "../assets/icons8-box-91.png";

function Piegraph() {
  const piedata = [
    {
      name: "Group A",
      value: 2000,
      start: 180,
      end: 90,
      innerRadius: 60,
      outerRadius: 105,
    },
    {
      name: "Group B",
      value: 1000,
      start: 90,
      end: 40,
      innerRadius: 64,
      outerRadius: 100,
    },
    {
      name: "Group C",
      value: 800,
      start: 40,
      end: 0,
      innerRadius: 66,
      outerRadius: 98,
    },
  ];
  const COLORS = ["#21CC9E", "#8676FF", "#EFF4F8"];
  return (
    <>
      <Card
        sx={{
          position: "relative",
          boxShadow: "none",
          border: "2px solid #D7E4EE",
          height: "100%",
          padding: "5px",
        }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography
            style={{
              fontSize: "16px",
              padding: "10px",
              fontWeight: "600",
              color: "#383874",
            }}
          >
            Social Source
          </Typography>
          <MoreHorizIcon sx={{ color: "#d0dbd3" }} />
        </Stack>

        <div
          style={{
            positon: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              textAlign: "center",
              top: "52%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <Typography
              component="div"
              variant="subtitle2"
              style={{
                textTransform: "uppercase",
                color: "gray",
                fontSize: "11px",
              }}
            >
              Total sales
            </Typography>
            <Typography
              component="div"
              variant="h5"
              style={{
                color: "#383874",
                fontWeight: "700",
                fontFamily: "Open Sans",
              }}
            >
              3,234
            </Typography>
            <span style={{ display: "flex", color: "#403d3d" }}>
              <img src={Product} alt="product" width="15rem" height="15rem" />
              <Typography
                component="div"
                variant="subtitle2"
                style={{
                  fontSize: "11px",
                  color: "#383874",
                  fontWeight: "600",
                }}
              >
                &nbsp;Products
              </Typography>
            </span>
          </Box>
          <ResponsiveContainer width="100%" height={120}>
            <PieChart>
              {piedata.map((entry, index) => (
                <Pie
                  cx="50%"
                  cy={100}
                  data={[entry]}
                  startAngle={entry.start}
                  endAngle={entry.end}
                  innerRadius={entry.innerRadius}
                  outerRadius={entry.outerRadius}
                  fill="#8884d8"
                  dataKey="value"
                  paddingAngle={0}
                >
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                </Pie>
              ))}
            </PieChart>
          </ResponsiveContainer>
        </div>
        <CardContent
          style={{
            display: "flex",
            justifyContent: "space-between",
            textAlign: "center",
            alignItems: "center",
            lineHeight: "1.5",
            fontFamily: "Open Sans",
          }}
        >
          <Box>
            <div
              style={{
                width: "100%",
                height: "3px",
                backgroundColor: "#21CC9E",
              }}
            ></div>
            <Typography
              component="div"
              variant="subtitle2"
              style={{
                textTransform: "uppercase",
                color: "gray",
                fontSize: "11px",
                fontFamily: "Open Sans",
              }}
            >
              E-commerce
            </Typography>
            <Typography
              component="div"
              variant="h6"
              style={{
                color: "#383874",
                fontSize: "18px",
                fontFamily: "Open Sans",
                fontWeight: "700",
              }}
            >
              1,618
            </Typography>
          </Box>
          <div>
            <div
              style={{
                width: "100%",
                height: "3px",
                backgroundColor: "#8676FF",
                fontFamily: "Open Sans",
              }}
            ></div>
            <Typography
              component="div"
              variant="subtitle2"
              style={{
                textTransform: "uppercase",
                color: "gray",
                fontSize: "11px",
                fontFamily: "Open Sans",
              }}
            >
              Facebook
            </Typography>
            <Typography
              component="div"
              variant="h6"
              style={{
                color: "#383874",
                fontSize: "18px",
                fontFamily: "Open Sans",
                fontWeight: "700",
              }}
            >
              852
            </Typography>
          </div>
          <div>
            <div
              style={{
                width: "100%",
                height: "3px",
                backgroundColor: "#EFF4F8",
              }}
            ></div>
            <Typography
              component="div"
              variant="subtitle2"
              style={{
                textTransform: "uppercase",
                color: "gray",
                fontSize: "11px",
              }}
            >
              Instagram
            </Typography>
            <Typography
              component="div"
              variant="h6"
              style={{
                color: "#383874",
                fontSize: "18px",
                fontWeight: "700",
                fontFamily: "Open Sans",
              }}
            >
              808
            </Typography>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default Piegraph;
