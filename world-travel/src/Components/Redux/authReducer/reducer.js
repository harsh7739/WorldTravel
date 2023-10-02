import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_SUCCESS } from "./actionTypes";

const intialstate = {
    isAuth:false,
    token:"",
    isLoading:false,
    isError:false,
    login:[],
    
    
};


export const reducer = (state= intialstate,{type,payload}) => {
    switch (type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                isAuth :true,
                token : payload,
                isLoading : false,
                isError : false
            }
            // case ADMIN_LOGIN:
            //     return{
            //         ...state,
            //         // isAuth :true,
            //         // token : payload,
            //         isLoading : false,
            //         isError : false,
            //         login:payload
            //     }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading : false,
                isError : true,
                
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isLoading:false,
                isError:false
            }
        default:
            return state;
    }
}