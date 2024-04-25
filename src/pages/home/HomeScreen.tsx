import { View, Text, Image, StyleSheet } from "react-native"


export const HomeScreen = () => {

  return (
    <>
        {/* Header */}
        <View style={ styles.header_container }>
          <Text style={ styles.header_text }>Quiz App</Text>
        </View>

        {/** Avatar */}

        {/* Score */}
        
        <View style={ styles2.container }>
          <Text style={ styles2.text_puntos }>Puntos</Text>
          <Text style={ styles2.text_score }>31416</Text>
          <Text style={ styles2.text_tiempo }>Tiempo</Text>
          <Text style={ styles2.text_crono }>16:00</Text>
        </View>
        
        <View>
          <Image source={require('/Users/Whatare/Desktop/my-app/assets/logo.png')} style={ styles2.avatar }></Image>
        </View>

    </>
  )
}


const styles = StyleSheet.create({
    header_container: {
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      minWidth: 424,
      height: 70,
      backgroundColor: '#0ca907',
      borderBottomStartRadius: 30,
      borderBottomEndRadius: 30,
      justifyContent: 'center',
      alignItems: 'center'
    },
    header_text: {
      color: '#e9ffe6',
      fontFamily: 'Roboto',
      fontSize: 36,
      fontWeight: '600'
    }

});

const styles2 = StyleSheet.create({
  avatar: {
    marginTop: 90, 
    position: 'absolute',
    left: 140,
    width: 140,
    height: 140,
    borderRadius: 100,
    borderColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 5,
  },
  container: {
    padding: 20,
    position: 'absolute',
    margin: 35,
    top: 150,
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