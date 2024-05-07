import { View, Text, StyleSheet } from "react-native"
import { useNavigate } from 'react-router-native';
import { StatusBar } from "../../util";
import { CustomButton, QuizHeader, QuizInfo, QuizResponse } from '../components';



export const QuizScreen = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/quiz`, { replace: true });
  }

  return (
    <>
      <StatusBar/>

      <View style={{ flexDirection: 'column'}}>
        <QuizHeader />
        <QuizInfo />      
        <Text style={ styles.question }>{`Pregunta #1 : ${`¿Qué medidas se pueden tomar para proteger las fuentes de agua dulce?`}`}</Text>

        {/*  Quiz Reponses  */}
        <View style={ styles.response }>
          {/*  Respuesta A  */}
          <QuizResponse/>
        
          {/*  Respuesta B */}
          <QuizResponse/>

          {/*  Respuesta C */} 
          <QuizResponse/>

          {/*  Respuesta D  */}
         <QuizResponse/>
        </View>

          {/*  Next Quiz Question */} 
        <CustomButton 
          title="Submit" 
          handleClick={ handleClick }
        />
      </View> 
    </>
  )
}

const styles = StyleSheet.create({
  question: {
    position: 'relative',
    fontSize: 20,
    width: '90%',
    height: '10%',
    alignSelf: 'center',
    fontWeight: '600',
    marginBottom: '5%',
  },
  response: {
    flexDirection: 'column',
    position: 'relative',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '95%',
    height: '50%',
    marginBottom: '15%',
  }
})