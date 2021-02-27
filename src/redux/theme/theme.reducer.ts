import { DefaultTheme } from "styled-components";

export enum THEME_PROPS {
  PRIMARY_BORDER_COLOR = "BORDER_COLOR",
  APPLICATION_BACKGROUND_COLOR = "APPLICATION_BACKGROUND_COLOR",
}
// Global Styles go here
export const defaultTheme: DefaultTheme = {
  [THEME_PROPS.PRIMARY_BORDER_COLOR]: "rgb(217, 217, 217)",
  [THEME_PROPS.APPLICATION_BACKGROUND_COLOR]: "white",
};

export const themeReducer = (state = defaultTheme): DefaultTheme => {
  return state;
};
