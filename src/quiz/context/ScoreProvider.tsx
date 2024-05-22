import { useEffect, useState } from "react";
import { ContextProviderProps } from "../types"
import { ScoreContext } from "./ScoreContext"
import { getResponseStatus } from "../helpers/getResponseStatus";


export const ScoreProvider = ({ children }: ContextProviderProps ) => {
  const [ response, setResponse ] = useState({
    categoryID: '2',
    responseID: +'1',
    respID: 'A'
  });  

  const { categoryID, responseID, respID } = response;

  const status = getResponseStatus( categoryID, responseID, respID );
  const initialScore = status ? 60-60 : -80;

  const [counter, setCounter] = useState(initialScore);
  
  const increment = (value: number) => setCounter(prevCounter => prevCounter + value);
  const decrement = (value: number) => setCounter(prevCounter => prevCounter - value);
  const reset = () => setCounter(0);


  useEffect(() => { 
    if( status === true ) 
      increment( 60 )
    else if( status === false )
      decrement( 80 )
  
  }, [ response ])
  

  return (
    <ScoreContext.Provider value={{ counter, reset, response, setResponse }}>
      { children }
    </ScoreContext.Provider>
  )
}
