import { combineReducers } from 'redux'
import instructionReducer from './instructions'
import authReducer from './auth'

const rootReducer = combineReducers({
  instructions: instructionReducer,
  auth: authReducer
});

export default rootReducer;