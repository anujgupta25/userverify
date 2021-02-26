const Default_State = {
    user_info :{
        name : null
    },
    error:'',
    Authenticated : false
}

export const auth_reducer = (state=Default_State, action)=>{

    switch(action.type){

       case "AUTH_USER" : return{
           ...state,
           user_info : action.payload,
           Authenticated : true
        }
       case "AUTH_ERROR" : return{
        ...state,
        error : action.payload,
        Authenticated : false
       }

       default : return state;
    }
}