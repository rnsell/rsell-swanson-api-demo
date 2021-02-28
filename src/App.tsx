import React from "react";
import { Provider } from "react-redux";
import { configureStore, createNewChromeExtensionMessage } from "./redux";
import { ThemeContainer } from "./containers";
import { QuotesPage } from "./pages";

const storageKey = "swanson-redux";
const initialState = JSON.parse(
  window.sessionStorage.getItem(storageKey) ?? "{}"
);
const store = configureStore(initialState);
store.subscribe(() => {
  const storeState = store.getState();
  const serialziedStoreState = JSON.stringify(storeState);
  window.sessionStorage.setItem(storageKey, serialziedStoreState);
});

// Listen for chrome extension messages and send the data to redux
// The epic will santize message data so as not to cause any errors
window.addEventListener("message", (event) => {
  if (event?.data?.namespace === "ron-swanson-extension") {
    const payload = event?.data?.payload;

    if (!!payload) {
      const extensionAction = createNewChromeExtensionMessage(payload);

      store.dispatch(extensionAction);
    }
  }
});
function App() {
  return (
    <Provider store={store}>
      <ThemeContainer>
        <QuotesPage />
      </ThemeContainer>
    </Provider>
  );
}

export default App;
