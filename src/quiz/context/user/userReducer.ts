import { Action, CateroryScore } from "../../types";
import { types } from "./reducerTypes";


export const userReducer = ( initialState: CateroryScore[], action: Action) => {

    
    switch (action.type) {
        case types.update:
                const element = initialState.filter((ctg) => ctg.name.includes(action.paylod.name)).pop();
                
                const arrayOfElement = initialState.filter( ctg => ctg.name !== element?.name );
            
            return [ action.paylod, ...arrayOfElement ]

        // case types.create && action.paylod as CateroryScore[]:
        //     return action.paylod; 
        
      default:
        return initialState;
    }
};
