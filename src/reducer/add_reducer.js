const Default_State = {
    added : "",
    error :""
}

export const add_reducer = (state=Default_State, action)=>{

    switch(action.type){

       case "ADD_SUCCESS" : return{
           ...state,
           added : action.payload
       }
       case "AUTH_ERROR" : return{
           ...state,
        error : 'Can\'t Register Your Account'
       }

       default : return state;
    }
}