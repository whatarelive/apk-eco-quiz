import { TouchableNativeFeedback, View, Text, Image } from "react-native";
import { useImage } from "../../../util";



export const RefButton = ({setViewModal}: { setViewModal: React.Dispatch<React.SetStateAction<boolean>>}): JSX.Element => {

  const image = useImage('eyes', 'uiImage');

  return (
    <View style={{ width: 140, height: 20, margin: 5 }}>
      <TouchableNativeFeedback
        onPress={() => setViewModal( true )}
      >
        <View style={{ flexDirection: 'row' }}>
          <Image style={{ width: 16, height: 18 }} source={ image }/>
          <Text style={{ fontSize: 14, fontFamily: 'Rubik' , marginStart: 10, fontWeight: '900'}}>Ver Explicacion</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}
