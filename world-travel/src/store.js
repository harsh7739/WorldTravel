import thunk from 'redux-thunk'
import { reducer as loginReducer } from "./Components/Redux/authReducer/reducer";
import { reducer as destinationReducer } from './Destination Page/redux/reducer'
import { applyMiddleware, combineReducers, legacy_createStore } from "redux"


const rootReducer = combineReducers({loginReducer, destinationReducer})
const store=legacy_createStore(rootReducer,applyMiddleware(thunk))

export default store;