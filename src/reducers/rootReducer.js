import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { blogReducer } from "./blogReducer";
import { courseReducer } from "./courseReducer";
import { uiReducer } from "./uiReducer";
import { userReducer } from "./userReducer";


export const rootReducers = combineReducers({
    auth : authReducer,
    user : userReducer,
    ui : uiReducer,
    course : courseReducer,
    blog : blogReducer
})