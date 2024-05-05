import { useEffect, useState } from "react"
import { Dimensions } from 'react-native';
import Constants from "expo-constants";


export const useDimensions = () => {

    const [ dimensions, setDimensions ] = useState({ ancho: 0, alto: 0 })

    const getDimensions = async() => {
        const dimW = Dimensions.get('window').width;
        const dimH = Dimensions.get('window').height - Constants.statusBarHeight;

        if ( !dimH && !dimW ) {
            setDimensions({
                ...dimensions,
                ancho: dimW,
                alto: dimH
            })
        }
    }

    useEffect(() => {
        getDimensions();

    }, [ Dimensions.get('window').width, Dimensions.get('window').height])

    return {
        ...dimensions,
        dimensions,
    }
}