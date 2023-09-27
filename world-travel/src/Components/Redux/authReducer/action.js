import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_SUCCESS } from "./actionTypes"

let URL = "https://furlinko.onrender.com/users";



export const loginUser = (email, password) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  return axios
    .post(`${URL}`, { email, password })
    .then((res) => {
      console.log("login success", res.data);
      dispatch({ type: LOGIN_SUCCESS, payload: { email, password } }); 
    })
    .catch((err) => {
      console.log("login failure", err);
      dispatch({ type: LOGIN_FAILURE });
    });
};


export const createAccount = (payload) => (dispatch) =>{
        dispatch({type:LOGIN_REQUEST});
      
   return axios.post(`${URL}`,payload).then((res)=>{
      console.log("account created",res.data);
      dispatch({type:SIGNUP_SUCCESS});
    }).catch((err)=>{
      dispatch({type:LOGIN_FAILURE})
    })
   
}

