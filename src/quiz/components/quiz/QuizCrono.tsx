import { View, Text, Image, StyleSheet } from "react-native"
import { useContext, useEffect, useState } from "react";
import { theme, useImage } from "../../../util";
import { useNavigate } from 'react-router-native';
import { NextQuizContext, ScoreContext } from "../../context";
import { QuizCronoProps } from "../../types";



export const QuizCrono = ({ restart, question, setQuestion }: QuizCronoProps ): JSX.Element => {

    const navigate = useNavigate();
    const [ icon, setIcon ] = useState('crono');
    const { active, status, setActive } = useContext( NextQuizContext );
    const { decrementScore, updateResponseTime } = useContext( ScoreContext );
    
    const image = useImage( icon, 'uiImage' );

    const [ times, setTime ] = useState( 60 );

    useEffect(() =>{
      setIcon('crono')
      setTime( 60 );
    }, [ restart ])
    
    useEffect(() => {
      if ( status ) { 
        updateResponseTime( 61 - times );
      }
    }, [ status ])
    
    
    useEffect(() => {
      const interval = setInterval(() => {
        if ( status ) return;

        if( times === 0 ) {
          setActive({
            ...active,
            enable: false,
            blocked: false,
            refId: ''
          })
                
          updateResponseTime( 60 );
          decrementScore( 20 )
                
          if( question >= 5) navigate(`/victory`)    
          setQuestion( question + 1 )
        }
              
        setTime( times - 1 );
              
        if ( times === 16 ) setIcon('redCrono');
      
      }, 1000);
            
      return () => clearInterval( interval );
            
    }, [ times ]);
    
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