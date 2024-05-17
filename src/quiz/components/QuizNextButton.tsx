import { View, Image, StyleSheet, TouchableNativeFeedback } from "react-native";
import { useIconChange, useImage } from "../hooks";



export const QuizNextButton = ({ icon1, icon2, onClick }: { icon1: string, icon2: string, onClick : CallableFunction }) => {

  const { icon } = useIconChange( icon1, icon2 );
  const image = useImage( icon, 'uiImage' );

  return (
    <View style={ styles.container }>
      <TouchableNativeFeedback
        onPress={() => onClick()}
      >
        <Image
          source={ image }
          style={ styles.icon }/>
      </TouchableNativeFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    
  },
  icon: {

  }
})