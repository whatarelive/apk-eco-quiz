import { Action, CateroryScore } from "../../types";
import { types } from "./reducerTypes";


export const userReducer = ( initialState: CateroryScore[], action: Action ) => {

    const element = initialState.filter( ctg => ctg.name.includes( action.paylod.name ) ).pop();
    const arrayOfElement = initialState.filter( ctg => ctg.name !== element?.name );

    switch (action.type) {
        case types.update:
            return [ action.paylod, ...arrayOfElement ]

      default:
        return initialState;
    }
};
