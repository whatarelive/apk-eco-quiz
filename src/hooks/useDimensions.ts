import { useState } from "react"
import { Dimensions } from 'react-native';

export const useDimensions = () => {

    const [ dimensions, setDimensions ] = useState({ancho: 0, alto: 0})

    const getDimensions = async() => {
        const dimW = Dimensions.get('window').width;
        const dimH = Dimensions.get('window').height;

        if ( !dimH && !dimW ) {
            setDimensions({
                ...dimensions,
                ancho: dimW,
                alto: dimH
            })
        }
    }

    return {
        ...dimensions,
        dimensions,
        getDimensions
    }
}