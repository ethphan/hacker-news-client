import React, { useState } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { lightBlue } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: "light",
  },
});

const themeDark = createMuiTheme({
  palette: {
    type: "dark",
    primary: lightBlue,
  },
});

const Theme = (props) => {
  const { children, darkMode } = props;
  const defaultTheme = darkMode ? themeDark : theme;
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

export const withTheme = (Component) => {
  return (props) => {
    const [darkMode, setDarkMode] = useState(false);
    return (
      <Theme darkMode={darkMode}>
        <Component {...props} darkMode={darkMode} setDarkMode={setDarkMode} />
      </Theme>
    );
  };
};
