import logo from "./logo.svg";
import "./App.css";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Container from "./components/Container";
import { color } from "@mui/system";

const theme = createTheme({
  // typography: {
  //   fontFamily: "Segoe UI",
  //   fontWeightLight: 400,
  //   fontWeightRegular: 600,
  //   fontWeightMedium: 700,
  //   fontWeightBold: 800,
  //   button: {
  //     textTransform: "capitalize",
  //     textDecoration: "none",
  //   },
  // },
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
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="ui-template-main">
        <Container />
      </div>
    </ThemeProvider>
  );
}

export default App;
