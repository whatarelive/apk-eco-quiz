import { useEffect, useState } from "react";
import { getImageByPath } from "../helpers/getImageByPath";
import { ImageURISource } from "react-native";



// Custom Hook encargado de controlar el flujo de carga de las imagenes.
export const useImage = ( imageUrl: string, type: string ) => {

    // Estado donde se guarda el objeto Image.
    const [ state, setState ] = useState<ImageURISource>();

    useEffect(() => {
        // Carga la imagen.
        const image = getImageByPath( imageUrl, type );
        
        // Se guarda la imagen en el estado.
        setState( image );
        
        // El useEffect se va a ejecutar cada vez que cambia su dependencia.
      }, [imageUrl]);

    return state;
}