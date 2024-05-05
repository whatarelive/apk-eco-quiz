import { View, Text, TouchableNativeFeedback } from "react-native"
import { useNavigate } from 'react-router-native';
import { StatusBar, colors } from "../../util";

export const QuizScreen = () => {

  const navigate = useNavigate()

  const handleTouch = () => {
    navigate('/home', { replace: true });
  }

  return (
    <>
      <StatusBar/>
      <Text>Quiz App</Text>
    
      <View style={{margin: 20, width:200, height: 60, backgroundColor: '#a22'}}>  
        <TouchableNativeFeedback
          onPress={ handleTouch }
        >
          <View>
            <Text style={{height: '100%' ,color: colors.textPrimary, textAlign: 'center' }}>Volver Atras</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </>
  )
}
