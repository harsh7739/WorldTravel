import { ADD_NEW_USERS, DELETE_USER,ADMIN_HOTELS,EDIT_HOTELS_SUCCESS,ADMIN_HOTEL_SUCCESS } from "./actionType"

const initialState = {
  isLoading : false,
  isError : false,
  destinations : [],
  destination : {},
  users: [],
  hotels:[]
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
      case "ADMIN_HOTEL_SUCCESS" : {
        return {
            ...state,
            isLoading : false,
            hotels : payload
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
case "EDIT_HOTELS_SUCCESS" : {
    return {
        ...state,
        isLoading : false,
        hotels : payload
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
    case ADMIN_HOTELS:
        {
            return {
                ...state,
                isLoading : false,
                hotels: payload
            }
        }

      default : {
          return state
      }
  }
}
