import { useEffect, useState } from "react";


export const useImage = ( imageUrl?: string ) => {

    const [ state, setState ] = useState();
    
    const getImage = ( path?: string ) => {

        switch ( path ) {
            case 'cambio':
                return require('/Users/Whatare/Desktop/my-app/src/assets/images/cambio.jpg');
            case 'biodiversidad':
                return require('/Users/Whatare/Desktop/my-app/src/assets/images/biodiversidad.jpg');
            case 'energia': 
                return require('/Users/Whatare/Desktop/my-app/src/assets/images/energia.jpg');
            case 'reciclaje':
                return require('/Users/Whatare/Desktop/my-app/src/assets/images/reciclaje.jpg');
            case 'agua':
                return require('/Users/Whatare/Desktop/my-app/src/assets/images/agua.jpg');
            default:
                return require('/Users/Whatare/Desktop/my-app/src/assets/images/logo.png');
        }
    }

    useEffect(() => {
        const image = getImage( imageUrl );
        
        setState( image );
      }, [imageUrl]);


    return state;
}