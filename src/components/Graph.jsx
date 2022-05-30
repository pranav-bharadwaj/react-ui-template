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
import { ThemeProvider, createTheme } from "@mui/material/styles";

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

  return (
    <>
      <Card
        sx={{
          padding: "10px",
          boxShadow: "none",
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
            width="80%"
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
    </>
  );
}

export default Graph;
