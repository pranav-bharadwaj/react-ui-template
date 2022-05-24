import {
  Card,
  CardContent,
  Grid,
  InputAdornment,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Product from "../assets/icons8-box-91.png";
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
  LineChart,
  Legend,
  Line,
} from "recharts";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box, textAlign } from "@mui/system";
function CustomTooltip({ active, payload }) {
  if (active) {
    return (
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          padding: "5px",
          borderRadius: "5px",
          border: "1px solid #CECED2",
          color: "#383874",
          fontWeight: "700",
          fontFamily: "Open Sans",
        }}
      >
        {`$${payload[0].value * 1000}`}
      </Box>
    );
  }
}

function Graph() {
  const [age, setAge] = React.useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  var data = [
    {
      name: "",
      uv: 2,
      pv: 1,
      amt: 3,
    },
    {
      name: "20 dec",
      uv: 2,
      pv: 2,
      amt: 2,
    },
    {
      uv: 1,
      pv: 1398,
      amt: 2,
    },
    {
      name: "21 dec",
      uv: 3,
      pv: 3,
      amt: 2,
    },
    {
      uv: 3,
      pv: 4,
      amt: 3,
    },
    {
      name: "22 dec",
      uv: 2,
      pv: 5,
      amt: 2,
    },
    {
      uv: 4,
      pv: 6,
      amt: 4,
    },
    {
      name: "23 dec",
      uv: 3,
      pv: 1398,
      amt: 2,
    },
    {
      uv: 2.5,
      pv: 4800,
      amt: 3,
    },
    {
      name: "24 dec",
      uv: 4,
      pv: 1398,
      amt: 2,
    },
    {
      uv: 3,
      pv: 3900,
      amt: 4,
    },
    {
      name: "25 dec",
      uv: 3,
      pv: 1398,
      amt: 2,
    },
    {
      uv: 2,
      pv: 4300,
      amt: 1,
    },
    {
      name: "26 dec ",
      uv: 3,
      pv: 1398,
      amt: 2,
    },
  ];
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
    <Grid
      container
      spacing={2}
      direction="row"
      width="100%"
      alignItems="flex-start"
      gap={8.3}
      style={{ flexGrow: 1, marginLeft: "0" }}
    >
      <Grid item xs={7.4}>
        <Card
          sx={{
            maxWidth: "100%",
            minHeight: 130,
            maxHeight: 235,
            padding: "10px",
            width: "100%",
            border: "1px solid #e3cccc",
            boxShadow: "none",
            margin: "1rem 0rem 0rem -1rem",
          }}
        >
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography
              style={{
                fontSize: "16px",
                padding: "10px",
                fontWeight: "600",
                color: "#383874",
              }}
            >
              Sales analytics
            </Typography>
            <Box sx={{ display: "flex", height: "0.5px" }}>
              <TextField
                value={age}
                select
                size="small"
                onChange={handleChange}
                inputProps={{ "aria-label": "Without label" }}
                sx={{
                  width: "12rem",
                  height: "0.5px",
                  fontSize: "10px",
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Period:</InputAdornment>
                  ),
                }}
              >
                <MenuItem value={10}>This week</MenuItem>
                <MenuItem value={20}>Last Month</MenuItem>
                <MenuItem value={30}>Last Year</MenuItem>
              </TextField>
            </Box>
          </Stack>
          <ResponsiveContainer width="100%" height={210}>
            <AreaChart
              travellerWidth={10}
              width="60%"
              height={200}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 10,
                bottom: 10,
              }}
              style={{ fontSize: "11px" }}
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
              <CartesianGrid />
              <XAxis
                dataKey="name"
                tickLine={false}
                axisLine={{ stroke: "#bbbbbb" }}
                tick={{ fill: "#b0b0b0" }}
              />
              <YAxis
                dataKey="amt"
                unit="K"
                width={30}
                axisLine={{ stroke: "#bbbbbb" }}
                tick={{ fill: "#b0b0b0" }}
                tickFormatter={(num) => {
                  return `$${num}`;
                }}
              />

              <Tooltip content={<CustomTooltip />} />
              <Area
                type="function"
                dataKey="uv"
                stroke="#8884d8"
                fillOpacity={0.11}
                strokeWidth={3}
                fill="url(#colorUv)"
                // dot={{
                //   stroke: "#8676FF",
                //   strokeWidth: 3,
                //   width: "2px",
                //   r: 5,
                //   height: "2px",
                //   fill: "#8676FF",
                // }}
                activeDot={{
                  stroke: "#8676FF",
                  strokeWidth: 3,
                  r: 4,
                  fill: "white",
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Card>
      </Grid>
      <Grid item xs={3.5} style={{ position: "relative" }}>
        <Card
          sx={{
            border: "1px solid #e3cccc",
            boxShadow: "none",
            marginTop: "1rem",
            minHeight: 130,
            maxHeight: 235,
            maxWidth: 330,
            padding: "10px",
            position: "relative",
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
                top: "58%",
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
      </Grid>
    </Grid>
  );
}

export default Graph;
