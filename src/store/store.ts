import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import thunks from "redux-thunk";

//as funcionalidades estao no store
//applyMiddleware(thunks) controlador das acoes do redux
export const store = createStore(reducers, {}, applyMiddleware(thunks));
