import { useRef } from "react";
import { ContextProviderProps } from "../../types"
import { ScoreContext } from "./ScoreContext"


export const ScoreProvider = ({ children }: ContextProviderProps ) => {

  const score = useRef(0);
  const responseTime = useRef(0);
  const aciertos = useRef(0);

  const incrementScore = ( value: number ) => {
    const revScore = score.current;
    score.current = revScore + value;
  }

  const decrementScore = ( value: number ) => {
    const revScore = score.current;
    score.current = revScore - value;
  }

  const updateResponseTime = ( time: number ) => {
    const revResponsiveTime = responseTime.current;
    responseTime.current =  time + revResponsiveTime;
  };

  const updateAciertos = ( acierto: number ) => {
    const revAciertos = aciertos.current;
    aciertos.current = revAciertos + acierto;
  }

  const resetEvery = () => {
    score.current = 0;  
    aciertos.current = 0;
    responseTime.current = 0;
  }

  return (
    <ScoreContext.Provider value={{ 
        score, incrementScore, decrementScore, 
        responseTime, updateResponseTime, 
        aciertos, updateAciertos, resetEvery }}
      >
      { children }
    </ScoreContext.Provider>
  )
}
