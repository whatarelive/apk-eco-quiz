import { View, Text, Image, StyleSheet, TouchableNativeFeedback, Alert } from "react-native"
import { useNavigate } from 'react-router-native';
import { StatusBar, colors } from "../../util";
import { CustomButton } from '../components/CustomButton';

export const QuizScreen = () => {

  const navigate = useNavigate()

  const handleTouch = () => {
    navigate('/home', { replace: true });
  }

  return (
    <>
      <StatusBar/>

      <View style={{ display: 'flex', flexDirection: 'column' }}>

        {/* Header */}
        <View>
          <Image 
              source={{uri: '/src/assets/images/Nueva carpeta/reciclaje.png'}}
              style={{}}>
          </Image>

          <Text
              style={{}}>
            {'Texto de Prueba'}
          </Text>


          <TouchableNativeFeedback
            onPress={() => Alert.alert('Hola')}
            style={{}}
            >
            <Image
                source={{uri: ''}}
                style={{}}>
            </Image>
          </TouchableNativeFeedback>
        </View>

        {/* Quiz Info */}
        <View style={{}}>
          <Text style={{}}>{`Quiz: ${'#'}`}</Text>
          <Text style={{}}>{'03:00 min'}</Text>
          <View style={{}}></View>
        </View>

        {/* Quiz Question */}
        <Text style={{}}>{"¿Qué medidas se pueden tomar para proteger las fuentes de agua dulce?"}</Text>

        {/* Quiz Reponses */}
        <View style={{}}>

          {/* Respuesta A */}
          <View style={{}}>
            <TouchableNativeFeedback
              onPress={() => Alert.alert('Respuesta A')}
            >
                <Text style={{}}>Respuesta A</Text>
            </TouchableNativeFeedback>
          </View>
        
          {/* Respuesta B */}
          <View style={{}}>
            <TouchableNativeFeedback
              onPress={() => Alert.alert('Respuesta B')}
            >
                <Text style={{}}>Respuesta B</Text>
            </TouchableNativeFeedback>
          </View>

          {/* Respuesta C */}
          <View style={{}}>
            <TouchableNativeFeedback
              onPress={() => Alert.alert('Respuesta C')}
            >
                <Text style={{}}>Respuesta C</Text>
            </TouchableNativeFeedback>
          </View>

          {/* Respuesta D */}
          <View style={{}}>
            <TouchableNativeFeedback
              onPress={() => Alert.alert('Respuesta D')}
            >
                <Text style={{}}>Respuesta D</Text>
            </TouchableNativeFeedback>
          </View>
        </View>

          {/* Next Quiz Question */}
        <CustomButton title="Submit"/>
      </View>
    </>
  )
}
