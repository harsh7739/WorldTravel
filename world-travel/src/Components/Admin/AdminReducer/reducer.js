const initialState = {
  isLoading : false,
  isError : false,
  destinations : [],
  destination : {}
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
    
      default : {
          return state
      }
  }
}