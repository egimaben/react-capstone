import axios from 'axios';
import { FETCH_INSTRUCTIONS } from './types';
export const fetchInstructions = () => async dispatch => {
  try {
    const res = await axios.get("/api/instructions/")
    dispatch({
      type: FETCH_INSTRUCTIONS,
      payload: res.data.instructions
    })
  } catch (err) {
    console.log(err.message);
  }
};