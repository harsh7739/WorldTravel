import { ADD_NEW_USERS, DELETE_USER } from "./actionType"

const initialState = {
  isLoading : false,
  isError : false,
  destinations : [],
  destination : {},
  users: []
}

export const reducer = (state = initialState, {type, payload}) => {
  switch(type) {
      case "ADMIN_PRODUCT_REQUEST" : {
          return {
              ...state,
              isLoading : true
          }
      }
      case "ADMIN_PRODUCT_SUCCESS" : {
          return {
              ...state,
              isLoading : false,
              destinations : payload
          }
      }
      case "ADMIN_PRODUCT_FAILURE" : {
          return {
              ...state,
              isLoading : false,
              isError : true
          }
      }
      case "REQUEST":{
        return {
            ...state,
            isloading:true,
            iserror:false
        }
    }
    case "ERROR":{
        return {
            ...state,
            iserror:true,
            isloading:false
        }
    }
    case "DELETE_SUCCESS" : {
      return {
          ...state,
          isLoading : false,
          destinations : payload
      }
  }
  case "EDIT_SUCCESS" : {
    return {
        ...state,
        isLoading : false,
        destinations : payload
    }
}
case ADD_NEW_USERS:
    return {
      ...state,
      isLoading: false,
      users:  payload,
    };
case DELETE_USER:
    return {
        ...state,
        isLoading: false,
        users: payload

    }
      default : {
          return state
      }
  }
}
