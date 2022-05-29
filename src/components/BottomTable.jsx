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
import { Box } from "@mui/system";
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
    "Shipping",
    "Collective Electronic",
    "$2102.00",
    "x10",
    "$22102.00"
  ),
  createData(
    "Poloroid one step instant",
    "January 12,2021",
    "Success",
    "Alleya photograph inc,",
    "$299.00",
    "x20",
    "$4555.00"
  ),
];
function ShippingBtn({ context }) {
  return (
    <Box
      sx={{
        width: "4rem",
        height: "0.5rem",
        padding: "10px",
        textAlign: "center",
        backgroundColor: "#FFF3DA",
        borderRadius: "5px",
      }}
    >
      <Typography style={{ color: "#FFC452", fontSize: "12px" }}>
        {context}
      </Typography>
    </Box>
  );
}
function SuccessBtn({ context }) {
  return (
    <Box
      sx={{
        width: "4rem",
        height: "0.5rem",
        padding: "10px",
        textAlign: "center",
        backgroundColor: "#D3F5EC",
        borderRadius: "5px",
      }}
    >
      <Typography style={{ color: "#34D0A6", fontSize: "12px" }}>
        {context}
      </Typography>
    </Box>
  );
}
function BottomTable() {
  return (
    <Paper
      sx={{
        width: "100%",
        marginTop: "1rem",
        border: "none",
        boxShadow: "none",
      }}
    >
      <Typography
        component="h6"
        variant="h6"
        sx={{
          color: "blue",
          fontWeight: "bold",
          marginBottom: "15px",
          color: "#383874",
          fontSize: "15px",
        }}
      >
        Order List
      </Typography>
      <TableContainer
        component={Paper}
        className="bottom-table-main"
        sx={{
          marginBottom: "1rem",
          maxHeight: 440,
          border: "none",
          boxShadow: "none",
        }}
      >
        <Table
          sx={{
            width: {
              xs: "max-content",
              sm: "max-content",
              lg: "100%",
              md: "100%",
            },
            minWidth: 700,
          }}
          stickyHeader
          aria-label="sticky table"
          size="small"
        >
          <TableHead className="table-header" sx={{ textAlign: "start" }}>
            <TableRow>
              <TableCell sx={{ color: "#ADAEC2", fontSize: "12px" }}>
                PRODUCT
              </TableCell>
              <TableCell sx={{ color: "#ADAEC2", fontSize: "12px" }}>
                ORDER DATE
              </TableCell>
              <TableCell sx={{ color: "#ADAEC2", fontSize: "12px" }}>
                STATUS
              </TableCell>
              <TableCell sx={{ color: "#ADAEC2", fontSize: "12px" }}>
                CUSTOMER
              </TableCell>
              <TableCell sx={{ color: "#ADAEC2", fontSize: "12px" }}>
                PRICE PER UNIT
              </TableCell>
              <TableCell sx={{ color: "#ADAEC2", fontSize: "12px" }}>
                QUANTITY
              </TableCell>
              <TableCell sx={{ color: "#ADAEC2", fontSize: "12px" }}>
                TOTAL PRICE
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.product}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <section
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      sx={{ bgcolor: green[500], width: 34, height: 34 }}
                      variant="rounded"
                      src={cameraimg}
                    >
                      N
                    </Avatar>
                    <Box
                      sx={{
                        marginLeft: "1rem",
                      }}
                    >
                      <p>#2345</p>
                      <span>{row.product}</span>
                    </Box>
                  </section>
                </TableCell>
                <TableCell>
                  <div>
                    <p>10:09 AM</p>
                    <span>{row.orderdate}</span>
                  </div>
                </TableCell>
                <TableCell>
                  {row.status === "Success" ? (
                    <SuccessBtn context={"Success"} />
                  ) : (
                    <ShippingBtn context={"Shipping"} />
                  )}
                </TableCell>
                <TableCell>
                  <div style={{ marginTop: "1rem" }}>
                    <span>{row.customer}</span>
                    <p>Los Angles,New york</p>
                  </div>
                </TableCell>
                <TableCell align="center">
                  <Typography
                    style={{
                      color: "#41417A",
                      fontSize: "17px",
                      fontFamily: "Open Sans",
                      fontWeight: "600",
                    }}
                  >
                    {row.priceperrate}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography
                    style={{
                      color: "#41417A",
                      fontSize: "17px",
                      fontFamily: "Open Sans",
                      fontWeight: "600",
                    }}
                  >
                    {row.quantity}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    style={{
                      color: "#21CC9E",
                      fontSize: "17px",
                      fontFamily: "Open Sans",
                      fontWeight: "600",
                    }}
                  >
                    {row.totalprice}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default BottomTable;
