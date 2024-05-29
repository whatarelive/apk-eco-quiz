import { TouchableNativeFeedback, View, Text, Image, StyleSheet } from "react-native";
import { theme, useImage } from "../../../util";
import { useContext } from 'react';
import { NextQuizContext } from "../../context";
import { RFValue } from 'react-native-responsive-fontsize';



export const RefButton = (): JSX.Element => {

  const image = useImage('eyes', 'uiImage');
  const { setViewModal } = useContext( NextQuizContext );

  return (
    <View style={ styles.container }>
      <TouchableNativeFeedback
        onPress={() => setViewModal( true )}
      >
        <View style={{ flexDirection: 'row'}}>
          <Image style={ styles.image } source={ image }/>
          <Text style={ styles.text }>Ver Explicación</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    width: RFValue(120), 
    height: RFValue(15),
    marginVertical: RFValue(2), 
  },
  image: {
    width: '12%', 
    height: '100%'
  },
  text: {
    marginStart: RFValue(5), 
    fontSize: RFValue(11), 
    fontWeight: '900', 
    fontFamily: 'Rubik', 
    textAlign: 'center', 
    color: theme.green_veryDark
  }
})