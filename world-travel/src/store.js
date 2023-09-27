import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as destinationReducer } from "./Destination Page/redux/reducer";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    destinationReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
