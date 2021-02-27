import { combineEpics } from "redux-observable";
import { fetchingQuotes } from "./fetching-quotes";

export const rootEpic = combineEpics<any>(fetchingQuotes);
