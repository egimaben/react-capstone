import { FETCH_INSTRUCTIONS } from '../actions/types';
const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INSTRUCTIONS:
      return action.payload;  
    default: 
     return state;
  }
}