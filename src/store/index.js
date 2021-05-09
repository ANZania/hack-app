import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {groundReducer} from "./reducers/fieldsInfo";

const rootReducer = combineReducers({
    info: groundReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
