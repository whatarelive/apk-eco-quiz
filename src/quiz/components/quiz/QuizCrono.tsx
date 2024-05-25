import { View, Text, Image, StyleSheet } from "react-native"
import { useImage } from "../../hooks"
import React, { useContext, useEffect, useRef, useState } from "react";
import { theme } from "../../../util";
import { useNavigate } from 'react-router-native';
import { NextQuizContext } from "../../context/NextQuizContext";
import { ScoreContext } from "../../context/ScoreContext";
import { Category, Question } from "../../types";



export const QuizCrono = ({ restart, category, questionA, question, setQuestion }: { restart: number, category: Category, questionA: Question, question: number, setQuestion: React.Dispatch<React.SetStateAction<number>> }) => {

    const navigate = useNavigate();
    const [ icon, setIcon ] = useState('crono');
    const { active, setActive } = useContext( NextQuizContext );
    const { score, responseTime, decrementScore, updateResponseTime } = useContext( ScoreContext );
    
    const image = useImage( icon, 'uiImage' );

    const [ times, setTime ] = useState( 60 );
    const time = useRef( 0 );

    useEffect(() =>{
      updateResponseTime( time.current );
      
      setIcon('crono')
      setTime( 60 );
    }, [ restart ])

    useEffect(() => {
      const interval = setInterval(() => {
        if( times === 0 ) {
          setActive({
                  ...active,
                  enable: false,
                  blocked: false,
                  refId: ''
                })
                
                decrementScore( 20 )
                
                if( question >= 5) navigate(`/victory/${ score.current }/${ responseTime.current }`)    
                  setQuestion( question + 1 )
              }
              
              setTime( times - 1 );
              
              if ( times === 16 ) {
                setIcon('redCrono');
              }
          }, 1000);
          
          
          return () => clearInterval( interval );
          
    }, [ times ])
    
    return (
      <View style={ styles.textContainer }>
        <Image source={ image }/>
        <Text style={{ ...styles.text, color: times < 16 ? theme.salmon_light : '#111' }}>{times}s</Text>
    </View>
  )
}

const styles =StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 24,
    fontFamily: 'Rubik'
  }
})