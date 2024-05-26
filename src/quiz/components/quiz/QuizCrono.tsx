import { View, Text, Image, StyleSheet } from "react-native"
import { useContext, useEffect, useRef, useState } from "react";
import { theme, useImage } from "../../../util";
import { useNavigate } from 'react-router-native';
import { NextQuizContext, ScoreContext } from "../../context";
import { QuizCronoProps } from "../../types";



export const QuizCrono = ({ restart, question, setQuestion }: QuizCronoProps ): JSX.Element => {

    const navigate = useNavigate();
    const [ icon, setIcon ] = useState('crono');
    const { active, status, setActive } = useContext( NextQuizContext );
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
        if ( status ) return;

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