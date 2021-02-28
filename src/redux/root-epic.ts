import { combineEpics } from "redux-observable";
import { chromeExtensionEpic } from "./chrome-extension";
import { fetchingQuotes } from "./fetching-quotes";

export const rootEpic = combineEpics<any>(fetchingQuotes, chromeExtensionEpic);
