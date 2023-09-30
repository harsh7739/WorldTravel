import axios from "axios";
import {
  ADMIN_PRODUCT_FAILURE,
  ADMIN_PRODUCT_REQUEST,
  ADMIN_PRODUCT_SUCCESS,
  ADMIN_LOGOUT,
  EDIT_SUCCESS,
  DELETE_SUCCESS,
  ERROR,
  REQUEST,
  DELETE_USER,
  ADD_NEW_USERS
 
} from "./actionType";

export const addProduct = (product) => {
  return async (dispatch) => {
    dispatch({ type: ADMIN_PRODUCT_REQUEST });
    try {
      const response = await axios.post(
        "https://destination-cw4.onrender.com/destinations",
        product
      );

      dispatch({ type: ADMIN_PRODUCT_SUCCESS, payload: response.data });
      return response.data; // Return the response data
    } catch (error) {
      dispatch({ type: ADMIN_PRODUCT_FAILURE });
      throw error; // Throw the error to handle it in your component
    }
  };
};

export const getProduct =(product)  =>{
  return async (dispatch) => {
    dispatch({ type: ADMIN_PRODUCT_REQUEST });
    try {
      const response = await axios.get(
        "https://destination-cw4.onrender.com/destinations",
        product
      );

      dispatch({ type: ADMIN_PRODUCT_SUCCESS, payload: response.data });
      return response.data; // Return the response data
    } catch (error) {
      dispatch({ type: ADMIN_PRODUCT_FAILURE });
      throw error; // Throw the error to handle it in your component
    }
  };
};

export const deleteProduct = (id) => (dispatch) =>{
  dispatch({type:REQUEST});

  return axios.delete(`https://destination-cw4.onrender.com/destinations/${id}`).then((res)=>{
    console.log(res.data)
     dispatch({type:DELETE_SUCCESS})
  }).catch((err)=>{
   dispatch({type:ERROR})
  })


};

export const editProduct = (id,payload) => (dispatch) =>{
  dispatch({type: REQUEST});

  return axios.patch(`https://destination-cw4.onrender.com/destinations/${id}`,payload).then((res)=>{
    console.log(res.data)
     dispatch({type:EDIT_SUCCESS})
  }).catch((err)=>{
   dispatch({type:ERROR})
  })


};

export const getSingleDestination = (id) => (dispatch) => {
  dispatch({type : "ADMIN_PRODUCT_REQUEST"})
  axios.get(`https://destination-cw4.onrender.com/destinations/${id}`).then((res) => {
      dispatch({type : "ADMIN_PRODUCT_SUCCESS", payload : res.data})
  }).catch((err) => {
      dispatch({type : "ADMIN_PRODUCT_FAILURE"})
  })
}

export const postUsers = (newData) => (dispatch) => {
  dispatch({ type: REQUEST });
  axios
    .post(`https://destination-cw4.onrender.com/users`, newData)
    .then((res) => {
      console.log(res);
      // dispatch({ type: POST_FETCH_SUCCESS });
      dispatch({ type: ADD_NEW_USERS, payload: res.data });
      dispatch(getUsers());
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ERROR });
    });
};

export const getUsers = () => (dispatch) => {
  dispatch({ type: REQUEST });
  axios
    .get(`https://destination-cw4.onrender.com/users`)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: ADD_NEW_USERS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ERROR });
    });
};

export const deleteUsers = (productId) => (dispatch) => {
  dispatch({ type: REQUEST });
  axios
    .delete(`https://destination-cw4.onrender.com/users/${productId}`)
    .then((res) => {
      dispatch({ type: DELETE_USER, payload: res.data });
      dispatch(getUsers());
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ERROR });
    });
};