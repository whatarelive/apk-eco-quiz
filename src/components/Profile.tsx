import { View, Image, StyleSheet, ImageURISource } from "react-native";
import { useState } from 'react';
import { ProfileScore } from "./ProfileScore";



export const Profile = (): JSX.Element => {

    const urlAvatar: ImageURISource  = require('/Users/Whatare/Desktop/my-app/assets/logo.png');
    
    // TODO: falta por implementar la actualizacion del estado de la puntuacion.
    const [ record , setRecord ] = useState({score: 0, time: 0})


  return (
    <>
        <View style={ styles.container }>
            
            <ProfileScore 
                record={ record.score } 
                text="Puntos"/>
            
            <Image 
                source={ urlAvatar } 
                style={ styles.avatar }>
            </Image>
            
            <ProfileScore 
                record={ record.time } 
                text="Tiempo"/>
        </View>
    
    </>
  )
}

const styles = StyleSheet.create({
    avatar: { 
        position: 'relative',
        width: 140,
        height: 140,
        borderRadius: 100,
        borderColor: '#ffffff',
        borderWidth: 5,
    },
    container: {
        position: 'relative',
        alignItems: 'center',
        flexDirection: 'row',
        width: '85%',
        height: '50%',
        justifyContent: 'center',
        paddingHorizontal: 20,
        borderRadius: 28,
        backgroundColor: '#1be510'
    } 
}); 