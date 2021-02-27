import { combineReducers } from "redux";
import { DefaultTheme } from "styled-components";
import {
  applicationSettingReducers,
  ApplicationSettings,
} from "./application-settings";
import { fetchingQuotesReducer, FetchingQuoteState } from "./fetching-quotes";
import { QuotesTable, quoteTableReducer } from "./quotes-table";
import { themeReducer } from "./theme";

export type ApplicationReduxStore = {
  theme: DefaultTheme;
  applicationSettings: ApplicationSettings;
  quotesTable: QuotesTable;
  fetchingQuotes: FetchingQuoteState;
};

export const rootReducer = combineReducers<ApplicationReduxStore>({
  theme: themeReducer,
  applicationSettings: applicationSettingReducers,
  quotesTable: quoteTableReducer,
  fetchingQuotes: fetchingQuotesReducer,
});
