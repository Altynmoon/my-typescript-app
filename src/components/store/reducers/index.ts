import { jobs } from "./jobs";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
    job: jobs,
  });
  export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type IState = ReturnType<typeof rootReducer>;
