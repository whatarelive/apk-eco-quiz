import { ImageURISource } from "react-native";
import { categoryImages, uiImage } from "../../util/data/ImagesData";

type ImageResorce = {
    name: string,
    path: ImageURISource
}

const filtado = ( images: Array<ImageResorce>, name: string ) => {
    const image = images.filter( img => img.name === name ).shift();

    if ( !image ) 
        throw new Error(`This value for ${ image } is undefined`)
    
    return image.path
}

export const getImageByPath = ( name: string, type: string ) => {

    switch ( type ) {
        case 'categoryImage':
            return filtado( categoryImages, name );
        default:
            return filtado( uiImage, name );
    }
}
