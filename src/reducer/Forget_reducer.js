const Forget_default ={
    loading : false,
    status : false,
    message : "",
    error : ""
}

export const Forget_reducer = (state=Forget_default, action)=>{
    switch(action.type){
        case "FORGET_LOADING": return{
            ...state,
            loading : true
        }
        case "FORGET_EMAIL" : return{
            ...state,
            loading: false,
            message : action.payload.message,
            status : action.payload.otpStatus
        }
        case "FORGET_EMAIL_ERROR" : return{
            ...state,
            loading: false,
            error : action.payload
        }
        default : return state;
    }
}