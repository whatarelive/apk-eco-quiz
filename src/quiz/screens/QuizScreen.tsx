import { useParams } from 'react-router-native';
import { View, Text, StyleSheet } from "react-native"
import { useContext, useMemo, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { shuffle } from "lodash";
import { Header, StatusBar, theme } from "../../util";
import { QuizInfo, QuizListResponse, QuizActionFooter, RefModal, BackModal } from '../components';
import { getCategoryById, getQuestionById } from "../helpers";
import { NextQuizContext } from "../context";
import Constants from 'expo-constants';



export const QuizScreen = (): JSX.Element => {

  // useParams es una función de react-router-dom que devuelve los parámetros de la URL.
  const { categoryId, questionId } = useParams();

  // Aquí se está inicializando el estado de 'question' con el valor de 'questionId'.
  const [ question , setQuestion ] = useState( +questionId! );
  
  // getCategoryById es una función que devuelve la categoría correspondiente al 'categoryId' proporcionado.
  const category = getCategoryById( categoryId );
  
  // getQuestionById es una función que devuelve la pregunta correspondiente al 'question' y 'category' proporcionados.
  const questionA = getQuestionById( question, category );

  // Contexto para obtener los estados para mostrar los modales.
  const { viewModal, backModal } = useContext( NextQuizContext );

  // Solo se va volver a ejecutar la funcion de ordenacion cuando cambie la lista
  const respuestas = useMemo(() => shuffle( questionA.respuestas ), [ questionA ])

  return (
    <>
      <StatusBar/>
      
      <View style={ styles.container }>
        
        <Header title={ category.name }/>
        
        <QuizInfo id={ questionA.id } total={ 20 } />    
        
        <Text style={ styles.question }>{ questionA.pregunta }</Text>
          
        <View style={ styles.subContainer }>
          <QuizListResponse respuestas={ respuestas } correct={ questionA.correcta } />
          <QuizActionFooter category={ category } questionA={ questionA } question={ question } setQuestion={ setQuestion } />
        </View>

        {
          viewModal &&
            <RefModal description="fdvbaubfviuannjaks cdkja vhabdfvyuhadu baiucbuiacuiasdbcuibdasvadbvuiadfbvuibfdiu adiv uiadbvuiadbvuidf ui adi" />
        }
        { backModal && <BackModal/> }
      </View> 
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 1,
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: theme.brown_ligt
  },
  subContainer: {
    flex: 4, 
    marginBottom: Constants.statusBarHeight,  
    borderRadius: 20, 
    backgroundColor: theme.brown_base, 
    flexDirection: 'column', 
    alignItems: 'center'
  },
  question: {
    flex: 0.9,
    marginHorizontal: RFValue(15),
    alignSelf: 'center',
    marginVertical: '5%',
    textAlign: 'left',
    fontSize: RFValue(18),
    fontFamily: 'Rubik',
    fontWeight: '300',
    color: theme.brown_veryDark
  }
})