import { createContext } from "react";
import { ScoresContext } from "../types";

export const ScoreContext = createContext<ScoresContext | undefined>( undefined ) as React.Context<ScoresContext>;