import thunk from 'redux-thunk'
import { reducer as loginReducer } from "./Components/Redux/authReducer/reducer";
import { reducer as adminReducer } from "./Components/Admin/AdminReducer/reducer"
import { applyMiddleware, combineReducers, legacy_createStore } from "redux"


const rootReducer = combineReducers({loginReducer, adminReducer})
const store=legacy_createStore(rootReducer,applyMiddleware(thunk))

export default store;

