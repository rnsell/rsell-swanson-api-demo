import { createAction } from "@reduxjs/toolkit";

// The epic will sanitize any payload data
export type ChromeExtensionNewMessageAction = {
  type: "CHROME_EXTENSION::NEW_MESSAGE";
  payload: any;
};

export type ChromeExtensionNewMessageActions = ChromeExtensionNewMessageAction;

export const createNewChromeExtensionMessage = createAction<any>(
  "CHROME_EXTENSION::NEW_MESSAGE"
);
