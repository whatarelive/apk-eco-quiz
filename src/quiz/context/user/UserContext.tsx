import { createContext } from "react";
import { UsersContext } from "../../types";


export const UserContext = createContext<UsersContext | undefined>( undefined ) as React.Context<UsersContext>;