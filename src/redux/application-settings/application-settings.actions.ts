import { createAction } from "@reduxjs/toolkit";
import { ApplicationSettings } from "./application-settings.model";

// The epic will sanitize any payload data
export type ApplicationSettingAction = {
  type: "APPLICATION_SETTING::UPDATE_SETTINGS";
  payload: Partial<ApplicationSettings>;
};

export type ApplicationSettingActions = ApplicationSettingAction;

export const updateApplicationSettings = createAction<
  Partial<ApplicationSettings>,
  "APPLICATION_SETTING::UPDATE_SETTINGS"
>("APPLICATION_SETTING::UPDATE_SETTINGS");
