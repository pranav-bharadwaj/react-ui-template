import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { deepOrange, green } from "@mui/material/colors";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { Button, Typography } from "@mui/material";
import cameraimg from "../assets/JN4id4eQ79r4c4JzHVNtH5.jpg";
import "../css/Containercss.css";
function createData(
  product,
  orderdate,
  status,
  customer,
  priceperrate,
  quantity,
  totalprice
) {
  return {
    product,
    orderdate,
    status,
    customer,
    priceperrate,
    quantity,
    totalprice,
  };
}

const rows = [
  createData(
    "Camera Nikon D 5000",
    "December 12,2021",
    "Shopping",
    "Collective Electronic",
    "$2102.00",
    "x10",
    "$2102.00"
  ),
  createData(
    "Camera Cannon Dlsr",
    "January 12,2021",
    "Delivered",
    "Gadjets Electronic",
    "$4555.00",
    "x01",
    "$4555.00"
  ),
  createData(
    "Camera Apple D 5000",
    "Febraury 12,2021",
    "Cancelled",
    "Mobiles Electronic",
    "$2102.00",
    "x25",
    "$2102.00"
  ),
  //   createData("Eclair", 262, 16.0, 24, 6.0),
  //   createData("Cupcake", 305, 3.7, 67, 4.3),
  //   createData("Gingerbread", 356, 16.0, 49, 3.9),
];
function BottomTable() {
  return (
    <TableContainer component={Paper} className="bottom-table-main">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="table-header">
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="right">Orderdate</TableCell>
            <TableCell align="right">status</TableCell>
            <TableCell align="right">Customer</TableCell>
            <TableCell align="right">Price Per Unit</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Total Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.product}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <section
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    sx={{ bgcolor: green[500] }}
                    variant="square"
                    src={cameraimg}
                  >
                    N
                  </Avatar>
                  <div>
                    <p>#2345</p>
                    <span>{row.product}</span>
                  </div>
                </section>
              </TableCell>
              <TableCell align="right">
                <div>
                  <p>10:09 AM</p>
                  <span>{row.orderdate}</span>
                </div>
              </TableCell>
              <TableCell align="right">
                <Button varient="contained" color="primary">
                  {row.status}
                </Button>
              </TableCell>
              <TableCell align="right">
                <div>
                  <span>{row.customer}</span>
                  <p>Los Angles,New york</p>
                </div>
              </TableCell>
              <TableCell align="right">
                <span>{row.priceperrate}</span>
              </TableCell>
              <TableCell align="right">
                <span>{row.quantity}</span>
              </TableCell>
              <TableCell align="right">
                <span>{row.totalprice}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BottomTable;
