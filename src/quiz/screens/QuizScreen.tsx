import { View, Text, StyleSheet } from "react-native"
import { useParams } from 'react-router-native';
import { useMemo, useState } from 'react';
import { shuffle } from "lodash";
import Constants from 'expo-constants';
import { Header, StatusBar, theme } from "../../util";
import { QuizInfo, QuizListResponse, QuizActionFooter } from '../components';
import { getCategoryById, getQuestionById } from "../helpers";
import { Modal } from "../../util/components/Modal";



export const QuizScreen = (): JSX.Element => {

  // useParams es una función de react-router-dom que devuelve los parámetros de la URL.
  const { categoryId, questionId } = useParams();

  // Aquí se está inicializando el estado de 'question' con el valor de 'questionId'.
  const [ question , setQuestion ] = useState( +questionId! );
  
  // getCategoryById es una función que devuelve la categoría correspondiente al 'categoryId' proporcionado.
  const category = getCategoryById( categoryId );
  
  // getQuestionById es una función que devuelve la pregunta correspondiente al 'question' y 'category' proporcionados.
  const questionA = getQuestionById( question, category );

  const [ viewModal, setViewModal ] = useState( false )

  const respuestas = useMemo(() => shuffle( questionA.respuestas ), [ questionA ])

  return (
    <>
      <StatusBar/>

      <View style={ styles.container }>
        
        <Header title={ category.name }/>
        
        <QuizInfo id={ questionA.id } total={ 5 } />    
        
        <Text style={ styles.question }>{ questionA.pregunta }</Text>
          
        <View style={ styles.subContainer }>
          <QuizListResponse respuestas={ respuestas } correct={ questionA.correcta } setViewModal={ setViewModal } />
          <QuizActionFooter category={ category } questionA={ questionA } question={ question } setQuestion={ setQuestion } />
        </View>

          {
            viewModal && 
            <View style={{position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{width: '100%', height: '100%', opacity: 0.7, backgroundColor: theme.black}}></View>
                <Modal description="fdvbaubfviuannjaks cdkja vhabdfvyuhadu baiucbuiacuiasdbcuibdasvadbvuiadfbvuibfdiu adiv uiadbvuiadbvuidf ui adi" setViewModal={ setViewModal }/>
            </View>
          }
      </View> 
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    padding: 1,
    justifyContent: 'center',
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