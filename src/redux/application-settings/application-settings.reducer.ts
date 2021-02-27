export type ApplicationSettings = {
  numberOfQuotesToFetch: number;
};

const defaultActionSettings: ApplicationSettings = {
  numberOfQuotesToFetch: 10,
};

export const applicationSettingReducers = (
  state = defaultActionSettings
): ApplicationSettings => {
  return state;
};
