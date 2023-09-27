import thunk from 'redux-thunk'
import { reducer as loginReducer } from "./Components/Redux/authReducer/reducer";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux"


const rootReducer = combineReducers({loginReducer})
const store=legacy_createStore(rootReducer,applyMiddleware(thunk))

export default store;