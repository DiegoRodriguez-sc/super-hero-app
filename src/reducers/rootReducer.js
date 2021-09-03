import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { herosReducer } from "./herosReducer";


export const rootReducer = combineReducers({
 auth:authReducer,
 heros:herosReducer,
})