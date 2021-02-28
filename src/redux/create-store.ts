import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createEpicMiddleware } from "redux-observable";
import { rootReducer } from "./root-reducer";
import { rootEpic } from "./root-epic";
import { generateEpicDependencies } from "./epic-depdencies";

export const configureStore = (
  baseState: any = {},
  dependencyOverides: any = {}
) => {
  const epicMiddleware = createEpicMiddleware({
    dependencies: { ...generateEpicDependencies(), ...dependencyOverides },
  });

  const store = createStore(
    rootReducer,
    baseState,
    composeWithDevTools(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic);

  return store;
};
