import { useState } from "react"

export const useCounter = ( initialvalue: number ) => {

    // Estado del contador del CustomHook
    const [ counter, setCounter ] = useState( initialvalue );

    // Funciones para modificar el estado del contador.
    const increment = ( value = 60 ) => setCounter( counter + value );
    const decrement = ( value = -80 ) => setCounter( counter - value );
    const reset = () => setCounter( 0 );

    return {
        counter,
        increment,
        decrement,
        reset
    }
}