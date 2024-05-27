import { View, Image, StyleSheet, TouchableNativeFeedback } from "react-native";
import { useState } from 'react';
import { ProfileScore } from "./ProfileScore";
import { theme, useImage } from "../../../util";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigate } from 'react-router-native';



export const Profile = (): JSX.Element => {

    const navigate = useNavigate()
    const [ record , setRecord ] = useState({score: 0})
    const urlAvatar = useImage('avatar', 'uiImage');


  return (
    <TouchableNativeFeedback
        onPress={() => navigate('/data')}
    >
        <View style= { styles.container }>
            <Image 
                source={ urlAvatar } 
                style={ styles.avatar }>
            </Image>
        
            <ProfileScore record={ record.score } text={"Mejor Puntuacion"}/>
        </View>
    </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
    avatar: { 
        width: RFValue(80),
        height: RFValue(100),
    },
    container: {
        width: '90%',
        height: '15%',
        alignSelf: 'center',
        alignItems: 'center',
        padding: '5%',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 16,
        backgroundColor: theme.brown_clay,
    }
}); 