import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_SUCCESS } from "./actionTypes";

export const loginUser = (userData) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  return axios
    .post("https://destination-cw4.onrender.com/login", userData) // Use POST instead of GET for login
    .then((res) => {
      console.log("login success", res.data);
      dispatch({ type: LOGIN_SUCCESS, payload: { userData } });
    })
    .catch((err) => {
      console.log("login failure", err);
      dispatch({ type: LOGIN_FAILURE });
    });
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
