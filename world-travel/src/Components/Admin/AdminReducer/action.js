import axios from "axios";
import {
  ADMIN_PRODUCT_FAILURE,
  ADMIN_PRODUCT_REQUEST,
  ADMIN_PRODUCT_SUCCESS,
  ADMIN_LOGOUT,
  EDIT_SUCCESS,
  DELETE_SUCCESS,
  ERROR,
  REQUEST
 
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

export const getProduct = () => {
  return async (dispatch) => {
    dispatch({ type: ADMIN_PRODUCT_REQUEST });
    try {
      const response = await axios.get(
        "https://destination-cw4.onrender.com/destinations"
      );

      dispatch({ type: ADMIN_PRODUCT_SUCCESS, payload: response.data });
      return response.data;
    } catch (error) {
      dispatch({ type: ADMIN_PRODUCT_FAILURE });
      throw error;
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