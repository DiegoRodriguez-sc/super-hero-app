import { type } from "../types/type";

const initialState = {
 logged:false,
 checking:true,
 loading:false
}

export const authReducer = (state = initialState, action) =>{
  switch (action.type) {
   case type.Login:
     return{
       ...state,
       token:action.payload,
       logged:true,
       checking:false
     }
   case type.authFinishChecking:
     return{
       ...state,
       checking:false
     }
   case type.logout:
     return{
       logged:false,
       checking:false
     }
   default:
    return state;
  }
}