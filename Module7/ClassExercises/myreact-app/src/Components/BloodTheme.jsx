import { createTheme } from "@mui/material/styles";
// save as themes/bloodTheme.jsx
// creates a new theme containing overrides for any defaults
// see https://mui.com/material-ui/customization/theming/
export const bloodTheme = createTheme({
  palette: {
    primary: { main: "#ff1d0d", contrastText: "#efefef" },
    secondary: { main: "#ff6257", contrastText: "#ffffff" },
  },
  typography: {
    fontFamily: "Montserrat",
    fontSize: 14,
    h1: { fontSize: 30 },
  },
  shape: { borderRadius: 0 },
  components: {
    MuiCssBaseline: {
      styleOverrides: `a { color: #3CA899; }`,
    },
    MuiButton: { defaultProps: { variant: "contained" } },
    MuiTextField: { defaultProps: { variant: "filled" } },
  },
});
