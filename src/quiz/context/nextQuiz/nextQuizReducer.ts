import { Action, State } from "../types";



export const nextQuizReducer = ( state: State, action: Action ): State => {

    switch (action.type) {
      case "[Next] True enable":
        return {
          ...state,
          enable: action.paylod.enable,
          blocked: action.paylod.blocked,
          refId: action.paylod.refId,
        };

      case "[Next] False enable":
        return {
          ...state,
          enable: action.paylod.enable,
          blocked: action.paylod.blocked,
          refId: action.paylod.refId,
        };

      case "[Next] RefId change":
        return {
          ...state,
          refId: action.paylod.refId,
        };

      default:
        return state;
    }
}