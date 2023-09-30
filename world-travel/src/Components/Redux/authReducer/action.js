import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_SUCCESS } from "./actionTypes";
const URL = "https://destination-cw4.onrender.com";

export const loginUser = (email) => (dispatch) => {
  console.log(email)
  dispatch({ type: LOGIN_REQUEST });

  return axios
    .get(`${URL}/users/${email}`)
    .then((res) => {
      const userData = res.data;
      if (userData) {
        dispatch({ type: LOGIN_SUCCESS });
        return userData; // Return user data for further processing
      } else {
        dispatch({ type: LOGIN_FAILURE });
        return null;
      }
    })
    .catch((err) => {
      console.error("Error fetching user data", err);
      dispatch({ type: LOGIN_FAILURE });
      return null;
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
