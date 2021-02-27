import { THEME_PROPS } from "../redux/theme";

export * from "../redux/theme";

export const getThemeValue = (aProp: THEME_PROPS) => (componentProps: any) => {
  return componentProps.theme[aProp];
};
