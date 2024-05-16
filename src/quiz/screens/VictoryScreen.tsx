import { View } from "react-native"
import { VictoryCard } from "../components";


export const VictoryScreen = () => {

  return (
    <View style={{display: 'flex', height: '100%', padding: '10%', alignContent: 'center', justifyContent: 'center' }}>
      <VictoryCard/>
    </View>
  )
}

/**
 * <Text>Hola Mundo</Text>

      <View style={{width: 200, height: 50, backgroundColor: '#a22'}}>
        <TouchableNativeFeedback
          onPress={() => navigate('/home')}
        >
          <Text style={{color: '#fff', textAlign: 'center', alignSelf:'center', backgroundColor: '#111', flex: 1}}>
           Ir Atras 
          </Text>
        </TouchableNativeFeedback>
      </View>
 */
