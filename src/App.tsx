import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "./redux";
import { ThemeContainer } from "./containers";
import { QuotesPage } from "./pages";

const store = configureStore();

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
