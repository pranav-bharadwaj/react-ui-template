import logo from "./logo.svg";
import "./App.css";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { color } from "@mui/system";
import { Box, Stack } from "@mui/material";
import Container from "./components/Container";
import SidebarMain from "./components/SidebarComponents/SidebarMain";

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
      {" "}
      <SidebarMain />
      <Stack direction={"column"}>
        <Box
          className="ui-template-main"
          style={{
            minWidth: "50%",
            // width: "max-content",
            display: "flex",
          }}
        >
          <Container />
        </Box>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
