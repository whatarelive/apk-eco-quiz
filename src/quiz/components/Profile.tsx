import { View, Image, StyleSheet } from "react-native";
import { useState } from 'react';
import { useImage } from "../hooks/useImage";
import { ProfileScore } from "./ProfileScore";
import { colors } from "../../util/themes/Theme";



export const Profile = (): JSX.Element => {

    // TODO: falta por implementar la actualizacion del estado de la puntuacion.
    const [ record , setRecord ] = useState({score: 0, time: 0})
    const urlAvatar = useImage();


  return (
    <View style= { styles.container }>
            
        <View style={ styles.subContainer }>
            
            <ProfileScore 
                record={ record.score } 
                text="Puntos"/>
            
            <View 
                style={ styles.separator }>
            </View>

            <ProfileScore 
                record={ record.time } 
                text="Tiempo"/>
        </View>
    
        <Image 
            source={ urlAvatar } 
            style={ styles.avatar }>
        </Image>
    </View>
  )
}

const styles = StyleSheet.create({
    avatar: { 
        position: 'relative',
        width: 140,
        height: 140,
        borderRadius: 100,
        borderColor: colors.background,
        borderWidth: 5,
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    subContainer: {
        position: 'absolute',
        alignItems: 'center',
        flexDirection: 'row',
        width: '85%',
        height: 70,
        top: 100,
        justifyContent: 'center',
        paddingHorizontal: 20,
        borderRadius: 28,
        backgroundColor: colors.primary
    },
    separator: {
        width: 5,
        height: '70%',
        position: 'relative',
        backgroundColor: '#fff'
    } 
}); 