import { useEffect, useState } from "react";


export const useImage = ( imageUrl?: string ) => {

    const [ state, setState ] = useState();
    
    const getImage = ( path?: string ) => {

        switch ( path ) {
            case 'cambio':
                return require('/Users/Whatare/Desktop/my-app/assets/cambio.jpg');
            case 'biodiversidad':
                return require('/Users/Whatare/Desktop/my-app/assets/biodiversidad.jpg');
            case 'energia': 
                return require('/Users/Whatare/Desktop/my-app/assets/energia.jpg');
            case 'reciclaje':
                return require('/Users/Whatare/Desktop/my-app/assets/reciclaje.jpg');
            case 'agua':
                return require('/Users/Whatare/Desktop/my-app/assets/agua.jpg');
            default:
                return require('/Users/Whatare/Desktop/my-app/assets/logo.png');
        }
    }

    useEffect(() => {
        const image = getImage( imageUrl );
        
        setState( image );
      }, [imageUrl]);


    return state;
}