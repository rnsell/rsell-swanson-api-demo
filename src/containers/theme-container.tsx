import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { ApplicationReduxStore } from "../redux";

const themeSelector = (store: ApplicationReduxStore) => {
  const { theme } = store;

  return theme;
};

interface ThemeContainerProps {}

export const ThemeContainer: React.FunctionComponent<ThemeContainerProps> = (
  props
) => {
  const { children } = props;
  const theme = useSelector(themeSelector);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
