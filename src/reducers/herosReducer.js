import { type } from "../types/type";

const  initialState = {
  good:[],
  bad:[],
  active:null
}

export const herosReducer = (state = initialState, action)=>{

 switch (action.type) {
  case type.herosAddGood:
   return{
    ...state,
    good:[action.payload, ...state.good]
   }
  case type.herosAddBad:
   return{
    ...state,
    bad:[action.payload, ...state.bad]
   }
  case type.heroDelete:
   return{
    ...state,
    good:state.good.filter(hero => hero !== action.payload),
    bad:state.bad.filter(hero => hero !== action.payload),
   }
  default:
   return state;
 }

}