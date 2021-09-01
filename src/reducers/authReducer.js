import { type } from "../types/type";

const initialState = {
 logged:false,
 checking:true
}

export const authReducer = (state = initialState, action) =>{
  switch (action.type) {
   case type.Login:
     return{
       ...state,
       logged:true,
       checking:false
     }
  
   default:
    return state;
  }
}