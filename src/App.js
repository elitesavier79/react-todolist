import React from "react";
import "./styles.css";
import { ThemeProvider } from "emotion-theming";

import Todolist from "./pages/todolist";

const theme = {
  color: {
    primary: {
      black: "#484848",
      red: "#e06262"
    }
  }
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Todolist />;
    </ThemeProvider>
  );
}
