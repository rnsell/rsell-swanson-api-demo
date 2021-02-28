import { match } from "ts-pattern";
import { ApplicationSettingAction } from "./application-settings.actions";
import { ApplicationSettings } from "./application-settings.model";

const defaultActionSettings: ApplicationSettings = {
  numberOfQuotesToFetch: 10,
  failApiRequests: false,
  loadingTime: 0,
};

export const applicationSettingReducers = (
  state = defaultActionSettings,
  action: ApplicationSettingAction
): ApplicationSettings => {
  return match<ApplicationSettingAction, ApplicationSettings>(action)
    .with(
      { type: "APPLICATION_SETTING::UPDATE_SETTINGS" },
      (anAction: Partial<ApplicationSettingAction>) => {
        return { ...state, ...anAction.payload };
      }
    )
    .otherwise(() => state);
};
