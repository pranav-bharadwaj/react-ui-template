import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import CardHeader from "@mui/material/CardHeader";
import { PureComponent } from "react";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector,
  Cell,
} from "recharts";
function Graph() {
  var data = [
    {
      name: "20 dec",
      uv: 400,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "21 dec",
      uv: 900,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "22 dec",
      uv: 600,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "23 dec",
      uv: 1300,
      pv: 4300,
      amt: 2000,
    },
    {
      name: "24 dec",
      uv: 800,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "25 dec",
      uv: 2000,
      pv: 3900,
      amt: 2500,
    },
    {
      name: "26 dec",
      uv: 1500,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "27 dec ",
      uv: 2500,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "28 dec",
      uv: 2000,
      pv: 4200,
      amt: 2000,
    },
  ];
  const piedata = [
    { name: "Group A", value: 500 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
  ];
  const COLORS = ["#21CC9E", "#8676FF", "#EFF4F8"];
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      width="100%"
      alignItems="flex-start"
      justifyContent="center"
      style={{ flexGrow: 1 }}
    >
      <Grid item xs={8}>
        <Card
          sx={{
            maxWidth: "100%",
            minHeight: 130,
            maxHeight: 235,
            padding: "10px",
            width: "95%",
            border: "1px solid #e3cccc",
            boxShadow: "none",
            marginTop: "1rem",
          }}
        >
          <Typography style={{ fontSize: "20px", padding: "10px" }}>
            Sales analytics
          </Typography>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart
              width="80%"
              height={200}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="4 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Card>
      </Grid>
      <Grid item xs={4} style={{ position: "relative" }}>
        <Card
          sx={{
            border: "1px solid #e3cccc",
            boxShadow: "none",
            marginTop: "1rem",
            minHeight: 130,
            maxHeight: 235,
            padding: "10px",
            position: "relative",
          }}
        >
          <Typography style={{ fontSize: "18px", padding: "5px" }}>
            Social source
          </Typography>
          <div
            style={{
              positon: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                textAlign: "center",
                top: "54%",
                left: "52%",
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
                variant="h6"
                style={{ color: "#383874" }}
              >
                3,245
              </Typography>
              <span style={{ display: "flex", color: "#403d3d" }}>
                <ProductionQuantityLimitsIcon style={{ fontSize: "15px" }} />
                <Typography
                  component="div"
                  variant="subtitle2"
                  style={{
                    textTransform: "uppercase",

                    fontSize: "11px",
                  }}
                >
                  products
                </Typography>
              </span>
            </div>

            <PieChart width={350} height={130}>
              <Pie
                data={piedata}
                cx={180}
                cy={120}
                startAngle={180}
                endAngle={0}
                innerRadius={80}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    strokeWidth={2 ** (index + 1)}
                  />
                ))}
              </Pie>
            </PieChart>
          </div>
          <CardContent
            style={{
              display: "flex",
              justifyContent: "space-between",
              textAlign: "center",
              alignItems: "center",
              lineHeight: "1.5",
            }}
          >
            <div>
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
                }}
              >
                E-commerce
              </Typography>
              <Typography
                component="div"
                variant="h6"
                style={{ color: "#383874", fontSize: "18px" }}
              >
                1618
              </Typography>
            </div>
            <div>
              <div
                style={{
                  width: "100%",
                  height: "3px",
                  backgroundColor: "#8676FF",
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
                Facebook
              </Typography>
              <Typography
                component="div"
                variant="h6"
                style={{ color: "#383874", fontSize: "18px" }}
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
                style={{ color: "#383874", fontSize: "18px" }}
              >
                808
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Graph;
