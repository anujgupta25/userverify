const VerifyDefault = {
    loading : false,
    status : false ,
    message : '',
    error : ''
}

export const Verify_otp = (state=VerifyDefault, action) =>{
    switch(action.type){
       
        case "VERIFY_OTP": return{
            ...state,
            loading : true
        }
        case "VERIFY_OTP_SUCCESS": return{
            ...state,
            loading : false, 
            status : action.payload.status,
            message : action.payload.message
        }
        case "VERIFY_OTP_ERROR": return{
            ...state,
            loading : false,
            error :  action.payload
            

        }
        default : return state;
    }
}