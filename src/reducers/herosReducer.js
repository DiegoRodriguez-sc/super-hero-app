import { type } from "../types/type";

const  initialState = {
  team:[]
}

export const herosReducer = (state = initialState, action)=>{

 switch (action.type) {
  case type.herosAdd:
    return { 
      ...state,
      team: [...state.team, action.payload]
    }
  case type.heroDelete:
    return {
      team:[...state.team.filter((hero) => hero.id !== action.payload)]
    }
  default:
   return state;
 }

}