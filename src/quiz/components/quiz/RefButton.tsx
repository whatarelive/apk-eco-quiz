import { TouchableNativeFeedback, View, Text, Image } from "react-native";
import { theme, useImage } from "../../../util";
import { useContext } from 'react';
import { NextQuizContext } from "../../context";



export const RefButton = (): JSX.Element => {

  const image = useImage('eyes', 'uiImage');
  const { setViewModal } = useContext( NextQuizContext );

  return (
    <View style={{ width: 140, height: 20, margin: 5 }}>
      <TouchableNativeFeedback
        onPress={() => setViewModal( true )}
      >
        <View style={{ flexDirection: 'row' }}>
          <Image style={{ width: 16, height: 18 }} source={ image }/>
          <Text style={{ fontSize: 14, fontFamily: 'Rubik' , marginStart: 10, fontWeight: '900', color: theme.green_veryDark}}>Ver Explicacion</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

