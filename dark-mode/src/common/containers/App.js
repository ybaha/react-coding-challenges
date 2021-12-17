import React from "react";
import { ThemeProvider } from "../../context";

export default function App({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
