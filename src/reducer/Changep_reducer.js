const Default_State = {
    success :'',
    error : ''
}

export const Changep_reducer = (state=Default_State, action)=>{

    switch(action.type){

       case "CHANGE_SUCCESS" : return{
           success : action.payload  
        }
       case "CHANGE_ERROR" : return{
             error : action.payload
       }

       default : return state;
    }
}