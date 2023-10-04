import axios from "axios";
import { ADMIN_LOGIN, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS, SIGNUP_SUCCESS } from "./actionTypes";
const URL = "https://destination-cw4.onrender.com";

export const loginUser = (email) => (dispatch) => {
  console.log(email)
  dispatch({ type: LOGIN_REQUEST });

  return axios.get(`${URL}/users?email=${email}`)
};


export const createAccount = (userData) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  return axios
    .post("https://destination-cw4.onrender.com/users", userData)
    .then((res) => {
      console.log("account created", res.data);
      dispatch({ type: SIGNUP_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILURE });
    });
};

export const logout = ()=>(dispatch)=>{
  dispatch({ type: LOGOUT_SUCCESS });
}