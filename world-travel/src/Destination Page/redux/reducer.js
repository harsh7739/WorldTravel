const initialState = {
    isLoading : false,
    isError : false,
    destinations : [],
    destination : {},
    hotel : {}
}

export const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case "GET_REQUEST" : {
            return {
                ...state,
                isLoading : true
            }
        }
        case "GET_SUCCESS" : {
            return {
                ...state,
                isLoading : false,
                destinations : payload
            }
        }
        case "GET_FAILURE" : {
            return {
                ...state,
                isLoading : false,
                isError : true
            }
        }
        case "GET_SINGLE_SUCCESS" : {
            return {
                ...state,
                destination : payload
            }
        }
        case "GET_HOTEL_SUCCESS" : {
            return {
                ...state,
                hotel : payload,
                isLoading : false,
            }
        }
        default : {
            return state
        }
    }
}