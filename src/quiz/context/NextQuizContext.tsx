import { createContext } from "react";
import { NexQuizContext } from "../types";


export const NextQuizContext = createContext<NexQuizContext | undefined>( undefined ) as React.Context<NexQuizContext>;