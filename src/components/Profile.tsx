import { View, Text, Image, StyleSheet } from "react-native";
import { useState } from 'react';



export const Profile = () => {

    const [ record , setRecord ] = useState({score: 0, time: 0})

  return (
    <>
        <View style={ styles.container }>
            <View style={{ width: '30%', flexDirection: 'column'}}>
                <Text style={ styles.text_puntos }>Puntos</Text>
                <Text style={ styles.text_score }>{ record.score }</Text>
            </View>
            
            <Image source={require('/Users/Whatare/Desktop/my-app/assets/logo.png')} style={ styles.avatar }></Image>
            
            <View style={{ width: '30%', flexDirection: 'column'}}>
                <Text style={ styles.text_tiempo }>Tiempo</Text>
                <Text style={ styles.text_crono }>{ record.time }</Text>
            </View>
        </View>
    
    </>
  )
}

const texts = StyleSheet.create({
    text: {
        flex: 1,
        width: '100%',
        height: '50%',
        position: 'relative',
        color: '#e9ffe6',
        fontFamily: 'System',
        fontWeight: 'bold'
    }
})

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
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'relative',
        paddingHorizontal: 20,
        width: '85%',
        height: '50%',
        borderRadius: 28,
        backgroundColor: '#1be510'
    },
    text_puntos: {
        textAlign: 'center',
        textAlignVertical: 'bottom',
        ...texts.text,
          fontSize: 14,
    },
    text_score: {
        ...texts.text,
        textAlign: 'center',
        textAlignVertical: 'top',
          fontSize: 16,
    },
    text_tiempo: {
        ...texts.text,
        textAlign: 'center',
        textAlignVertical: 'bottom',
          fontSize: 14,
    },
    text_crono: {
        ...texts.text,
        textAlign: 'center',
        textAlignVertical: 'top',
          fontSize: 16,
    }    
}); 