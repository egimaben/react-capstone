import axios from 'axios'
import { FETCH_USER_NAME,FETCH_TOKEN } from './types'
const fetchedUserName = (name) => {
  return {
    type: FETCH_USER_NAME,
    name: name
  }
}
const fetchUserName = (token) => dispatch => {
   return axios.get('https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=' + token)
   .then(res=>dispatch(fetchedUserName(res.data.name))).catch (err=>dispatch(fetchedUserName("")));
};
const fetchToken = () => dispatch => {
  const token = window.localStorage.getItem("jwtToken")
  dispatch({
    type: FETCH_TOKEN,
    token: token
  })
}
export {
  fetchedUserName,
  fetchUserName,
  fetchToken
}