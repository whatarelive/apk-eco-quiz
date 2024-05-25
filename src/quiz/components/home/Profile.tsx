import { View, Image, StyleSheet } from "react-native";
import { useState } from 'react';
import { useImage } from "../../../util/hooks/useImage";
import { ProfileScore } from "./ProfileScore";
import { theme } from "../../../util";



export const Profile = (): JSX.Element => {

    const [ record , setRecord ] = useState({score: 0, time: 0})
    const urlAvatar = useImage('avatar1', 'avatarImage');


  return (
    <View style= { styles.container }>
        <Image 
            source={ urlAvatar } 
            style={ styles.avatar }>
        </Image>
    
        <ProfileScore record={ record.score } text={"Mejor Puntuacion"}/>
    </View>
  )
}

const styles = StyleSheet.create({
    avatar: { 
        width: 100,
        height: 100,
    },
    container: {
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        padding: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 16,
        backgroundColor: theme.brown_clay,
    }
}); 