import { View, Text, Image, StyleSheet } from "react-native";


export const Profile = () => {


  return (
    <View style={{position: 'relative' , marginTop: 100, margin: 20 , width: '90%', justifyContent: 'center', alignItems: 'center'}}>
        <View style={ styles.container }>
            <Text style={ styles.text_puntos }>Puntos</Text>
            <Text style={ styles.text_score }>31416</Text>
            <Text style={ styles.text_tiempo }>Tiempo</Text>
            <Text style={ styles.text_crono }>16:00</Text>
        </View>
    
        <Image source={require('/Users/Whatare/Desktop/my-app/assets/logo.png')} style={ styles.avatar }></Image>
    </View>
  )
}

const styles = StyleSheet.create({
    avatar: { 
        position: 'relative',
        left: 140,
        width: 140,
        height: 140,
        borderRadius: 100,
        borderColor: '#ffffff',
        borderStyle: 'solid',
        borderWidth: 5,
    },
    container: {
        position: 'relative',
        width: 350,
        height: 68,
        borderRadius: 28,
        backgroundColor: '#1be510'
    },
    text_puntos: {
         position: 'absolute',
          left: 40,
          top: 10,
          width: 'auto',
          height: 'auto',
          color: '#e9ffe6',
          fontFamily: 'System',
          fontSize: 14,
          fontWeight: 'bold',
    },
    text_score: {
         position: 'absolute',
          left: 40,
          top: 30,
          width: 'auto',
          height: 'auto',
          color: '#e9ffe6',
          fontFamily: 'System',
          fontSize: 16,
          fontWeight: 'bold',
    },
    text_tiempo: {
         position: 'absolute',
          left: 260,
          top: 10,
          width: 'auto',
          height: 'auto',
          color: '#e9ffe6',
          fontFamily: 'System',
          fontSize: 14,
          fontWeight: 'bold',
    },
    text_crono: {
         position: 'absolute',
          left: 265,
          top: 30,
          width: 'auto',
          height: 'auto',
          color: '#e9ffe6',
          fontFamily: 'System',
          fontSize: 16,
          fontWeight: 'bold',
    }    
}); 