import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducers";
import { composeWithDevTools } from "redux-devtools-extension";

const store = configureStore({
  reducer: rootReducer,
  devTools: composeWithDevTools(), // Agrega soporte para Redux DevTools
});

export default store;
