import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {postReducer} from "./reducers/fieldsInfo";

const rootReducer = combineReducers({
    postReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
