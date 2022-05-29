import logo from "./logo.svg";
import "./App.css";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { color } from "@mui/system";
import { Box, Button, Drawer, Stack } from "@mui/material";
import Container from "./components/Container";
import SidebarMain from "./components/SidebarComponents/SidebarMain";
import SidebarTopmenu from "./components/SidebarComponents/SidebarTopmenu";
import ResponsiveContainer from "./ResponiveContainer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6D78FE",
      dark: "#1876d2",
    },
    secondary: {
      main: "#ff7e79",
    },
    divider: "rgba(0,0,0,0.3)",
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontFamily: "Open Sans",

          fontWeight: "600",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveContainer />
    </ThemeProvider>
  );
}

export default App;
