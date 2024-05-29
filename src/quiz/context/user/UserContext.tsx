import { createContext } from "react";
import { UsersContext } from "../../types";
import { categoryScore } from "./reducerTypes";


const initialContext = {
    state: categoryScore,
    bestScore: {
        current: 0
    },
    updateData: () => {}
}

export const UserContext = createContext<UsersContext>( initialContext );