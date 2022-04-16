import { Button, createTheme, Divider, ThemeProvider } from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import Mainlogo from "./MainLogo";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: React.CSSProperties["color"];
    };
  }

  interface Palette {
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }

  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties["color"];
    };
  }
}

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#f1c609",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

export default function MainNavbar() {
  return (
    <div
    // style={{ position: "sticky", top: "0", backgroundColor: "transparent" }}
    >
      <div
        style={{
          width: "100%",
          position: "fixed",
          top: "0",
          zIndex: "1",
          display: "flex",
          flexDirection: "row",
          background: "black",

          justifyContent: "space-between",
          margin: "null",
          padding: "null",
        }}
      >
        <div style={{ marginLeft: "5em", marginTop: "0.25em", width: "100px" }}>
          <Mainlogo height={114} width={367} />
        </div>
        <ThemeProvider theme={theme}>
          <Button
            color="primary"
            variant="contained"
            endIcon={<SendIcon />}
            sx={{
              height: "72px",
              width: " 367",
              marginRight: " 5em",
              marginTop: "2em",
            }}
          >
            Contact Us
          </Button>
        </ThemeProvider>
      </div>
      <Divider variant="middle" sx={{ color: "black" }} />
    </div>
  );
}
