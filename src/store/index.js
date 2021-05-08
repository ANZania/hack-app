import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {fieldInfoReducer, postReducer} from "./reducers/fieldsInfo";

const rootReducer = combineReducers({
    fieldInfoReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
