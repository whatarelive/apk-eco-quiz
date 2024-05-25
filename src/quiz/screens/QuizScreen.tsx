import { View, Text, StyleSheet } from "react-native"
import { useParams } from 'react-router-native';
import { useState } from 'react';
import { shuffle } from "lodash";
import Constants from 'expo-constants';
import { Header, StatusBar, theme } from "../../util";
import { QuizInfo, QuizListResponse, QuizActionFooter } from '../components';
import { getCategoryById, getQuestionById } from "../helpers";



export const QuizScreen = (): JSX.Element => {

  // useParams es una función de react-router-dom que devuelve los parámetros de la URL.
  const { categoryId, questionId } = useParams();

  // Aquí se está inicializando el estado de 'question' con el valor de 'questionId'.
  const [ question , setQuestion ] = useState( +questionId! );
  
  // getCategoryById es una función que devuelve la categoría correspondiente al 'categoryId' proporcionado.
  const category = getCategoryById( categoryId );
  
  // getQuestionById es una función que devuelve la pregunta correspondiente al 'question' y 'category' proporcionados.
  const questionA = getQuestionById( question, category );


  return (
    <>
      <StatusBar/>

      <View style={ styles.container }>
        
        <Header title={ category.name }/>
        
        <QuizInfo id={ questionA.id } total={ 5 } />    
        
        <Text style={ styles.question }>{ questionA.pregunta }</Text>
          
        <View style={ styles.subContainer }>
          <QuizListResponse respuestas={ shuffle( questionA.respuestas ) } />
          <QuizActionFooter category={ category } questionA={ questionA } question={ question } setQuestion={ setQuestion } />
        </View>

      </View> 
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    padding: 1,
    flexDirection: 'column',
    backgroundColor: theme.brown_ligt
  },
  subContainer: {
    flex: 1, 
    marginBottom: Constants.statusBarHeight,  
    borderRadius: 20, 
    backgroundColor: theme.brown_base, 
    flexDirection: 'column', 
    alignItems: 'center'
  },
  question: {
    marginHorizontal: 20,
    minHeight: '10%',
    maxHeight: '10%',
    alignSelf: 'center',
    marginBottom: '10%',
    textAlign: 'left',
    fontSize: 24,
    fontFamily: 'Rubik',
    fontWeight: '300',
    color: theme.brown_veryDark
  }
})