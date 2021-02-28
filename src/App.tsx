import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "./redux";
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
