import { ImageURISource } from "react-native";
import { avatarImages, categoryImages, iconImages, uiImage } from "../../util/data/ImagesData";

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
        case 'avatarImage':
            return filtado( avatarImages, name );
        case 'iconImage': 
            return filtado( iconImages, name );
        default:
            return filtado( uiImage, name );
    }
}
