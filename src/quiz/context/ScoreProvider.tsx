import { useRef } from "react";
import { ContextProviderProps } from "../types"
import { ScoreContext } from "./ScoreContext"


export const ScoreProvider = ({ children }: ContextProviderProps ) => {

  //const [ score, setScore ] = useState(0);
  const score = useRef(0);
  const responseTime = useRef(0);
  // const [ responseTime, setResponseTime ] = useState(0);

  const incrementScore = ( value: number ) => {
    const revScore = score.current;
    score.current = revScore + value;
  }

  const decrementScore = ( value: number ) => {
    const revScore = score.current;
    score.current = revScore - value;
  }

  const reset = () => score.current = 0;

  const updateResponseTime = ( time: number ) => {
    const revResponsiveTime = responseTime.current;
    responseTime.current =  revResponsiveTime + time;
  };

  const resetTime = () => responseTime.current = 0;


  return (
    <ScoreContext.Provider value={{ score, incrementScore, decrementScore, reset, responseTime, updateResponseTime, resetTime }}>
      { children }
    </ScoreContext.Provider>
  )
}
