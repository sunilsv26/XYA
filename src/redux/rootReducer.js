import { combineReducers } from "redux"
import login from './reducers/auth/auth'


const rootReducer = combineReducers({
    login:login
  })
  
  export default rootReducer