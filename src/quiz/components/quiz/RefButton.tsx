import { TouchableNativeFeedback, View, Text, Image, StyleSheet } from "react-native";
import { theme, useImage } from "../../../util";
import { useContext } from 'react';
import { NextQuizContext } from "../../context";



export const RefButton = (): JSX.Element => {

  const image = useImage('eyes', 'uiImage');
  const { setViewModal } = useContext( NextQuizContext );

  return (
    <View style={ styles.container }>
      <TouchableNativeFeedback
        onPress={() => setViewModal( true )}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Image style={ styles.image } source={ image }/>
          <Text style={ styles.text }>Ver Explicacion</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    width: '45%', 
    height: '20%',
    margin: 'auto',
    marginVertical: 5, 
  },
  image: {
    width: '14%', 
    height: '100%'
  },
  text: {
    marginStart: 10, 
    fontSize: 14, 
    fontWeight: '900', 
    fontFamily: 'Rubik', 
    textAlign: 'center', 
    color: theme.green_veryDark
  }
})