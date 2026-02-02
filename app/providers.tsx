"use client";

import {ThemeProvider, createTheme} from "@mui/material";
import type {ReactNode} from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#c026d3",
      light: "#f9a8d4",
      dark: "#86198f",
    },
    secondary: {
      main: "#ec4899",
      contrastText: "#fff",
    },
  },
});

export function Providers({children}: Readonly<{ children: ReactNode }>) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
