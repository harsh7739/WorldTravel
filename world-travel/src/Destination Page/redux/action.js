// All Login here

import axios from "axios"

export const getDestination = (paramsObj) => (dispatch) => {
    dispatch({type : "GET_REQUEST"})
    axios.get(`https://destination-cw4.onrender.com/destinations`, paramsObj).then((res) => {
        dispatch({type : "GET_SUCCESS", payload : res.data})
    }).catch((err) => {
        dispatch({type : "GET_FAILURE"})
    })
}

export const getSingleDestination = (id) => (dispatch) => {
    dispatch({type : "GET_REQUEST"})
    axios.get(`https://destination-cw4.onrender.com/destinations/${id}`).then((res) => {
        dispatch({type : "GET_SINGLE_SUCCESS", payload : res.data})
    }).catch((err) => {
        dispatch({type : "GET_FAILURE"})
    })
}

export const getSingleHotel = (id) => (dispatch) => {
    dispatch({type : "GET_REQUEST"})
    axios.get(`https://destination-cw4.onrender.com/hotels/${id}`).then((res) => {
        dispatch({type : "GET_HOTEL_SUCCESS", payload : res.data})
    }).catch((err) => {
        dispatch({type : "GET_FAILURE"})
    })
}