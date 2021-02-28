import { Epic, ofType } from "redux-observable";
import { from } from "rxjs";
import { mergeMap } from "rxjs/operators";
import {
  ApplicationSettingAction,
  updateApplicationSettings,
} from "../application-settings";
import { EpicDependencies } from "../epic-depdencies";
import { FetchQuoteAction, fetchQuotes } from "../fetching-quotes";
import { ApplicationReduxStore } from "../root-reducer";
import {
  ChromeExtensionNewMessageAction,
  ChromeExtensionNewMessageActions,
} from "./chrome-extension.actions";

const variableExists = (someValue: any) => {
  return someValue !== null && someValue !== undefined;
};

const generateApplicationSettingAction = (
  payload: any = {}
): [ApplicationSettingAction] => {
  const { numberOfQuotes, blockNetworkRequests, additionalLoadTime } = payload;

  const numberOfQuotesExists = variableExists(numberOfQuotes);
  const quoteProperty = numberOfQuotesExists
    ? { numberOfQuotesToFetch: numberOfQuotes }
    : {};

  const blockNetworkRequestsExists = variableExists(blockNetworkRequests);
  const failApiRequestsProperty = blockNetworkRequestsExists
    ? { failApiRequests: blockNetworkRequests }
    : {};

  const additionalLoadTimeExists = variableExists(additionalLoadTime);
  const additionalLoadTimeExistsProperty = additionalLoadTimeExists
    ? { loadingTime: additionalLoadTime }
    : {};

  const adjustedPayload = {
    ...failApiRequestsProperty,
    ...quoteProperty,
    ...additionalLoadTimeExistsProperty,
  };

  const action = updateApplicationSettings(adjustedPayload);

  return [action];
};

const generateActionsToRefetchData = (
  payload: any = {}
): FetchQuoteAction[] => {
  const { numberOfQuotes } = payload;
  const numberOfQuotesExists =
    numberOfQuotes !== null && numberOfQuotes !== undefined;
  const actionsToTake = numberOfQuotesExists ? [fetchQuotes()] : [];

  return actionsToTake;
};

export const chromeExtensionEpic: Epic<
  any,
  any,
  ApplicationReduxStore,
  EpicDependencies
> = (action$, state$, dependencies: EpicDependencies) => {
  return action$.pipe(
    ofType<ChromeExtensionNewMessageActions>("CHROME_EXTENSION::NEW_MESSAGE"),
    mergeMap((action: ChromeExtensionNewMessageAction) => {
      const { payload } = action;
      const { message } = dependencies;

      const applicationSettingActions = generateApplicationSettingAction(
        payload
      );
      const dataFetchingActions = generateActionsToRefetchData(payload);

      const totalActionsToTake = [
        ...applicationSettingActions,
        ...dataFetchingActions,
      ];

      message.success("Updated Application Settings");

      return from(totalActionsToTake);
    })
  );
};
