import { View, Text, TouchableNativeFeedback } from "react-native"
import { useNavigate } from "react-router-native"

export const VictoryScreen = () => {

  const navigate = useNavigate();

  return (
    <View style={{margin: 100, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hola Mundo</Text>

      <View style={{width: 200, height: 50, backgroundColor: '#a22'}}>
        <TouchableNativeFeedback
          onPress={() => navigate('/home')}
        >
          <Text style={{color: '#fff', textAlign: 'center', alignSelf:'center', backgroundColor: '#111', flex: 1}}>
           Ir Atras 
          </Text>
        </TouchableNativeFeedback>
      </View>
    </View>
  )
}
