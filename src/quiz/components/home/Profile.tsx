import { View, Image, StyleSheet, TouchableNativeFeedback } from "react-native";
import { useContext, useEffect } from 'react';
import { ProfileScore } from "./ProfileScore";
import { theme, useImage } from "../../../util";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigate } from 'react-router-native';
import { UserContext } from "../../context";



export const Profile = (): JSX.Element => {

    const navigate = useNavigate()
    const { state, bestScore } = useContext( UserContext );
    const urlAvatar = useImage('avatar', 'uiImage');

    useEffect(() => {
        let score = 0;

        for (let i = 0; i < state.length; i++) {
            if ( score < state[i].puntos ) {
                score = state[i].puntos 
            }
        }

        if ( bestScore.current < score && score > 0 ) {
            bestScore.current = score;
        }
    }, [ state ])
    

  return (
    <TouchableNativeFeedback
        onPress={() => navigate('/data')}
    >
        <View style= { styles.container }>
            <Image 
                source={ urlAvatar } 
                style={ styles.avatar }>
            </Image>
        
            <ProfileScore record={ bestScore.current } text={"Mejor Puntuacion"}/>
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