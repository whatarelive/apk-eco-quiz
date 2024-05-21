import { View, Text, Image, StyleSheet } from "react-native"
import { useImage } from "../hooks"
import React, { useContext, useEffect, useState } from "react";
import { theme } from "../../util";
import { useNavigate } from 'react-router-native';
import { NextQuizContext } from "../context/NextQuizContext";



export const QuizCrono = ({ restart, question, setQuestion }: { restart: number, question: number, setQuestion: React.Dispatch<React.SetStateAction<number>> }) => {

    const navigate = useNavigate();
    const [ icon, setIcon ] = useState('crono');
    const { active, setActive } = useContext( NextQuizContext );
    
    const image = useImage( icon, 'uiImage' );

    const [ time, setTime ] = useState( 60 );

    useEffect(() => {
        setIcon('crono')
        setTime( 60 );
    }, [ restart ])

    useEffect(() => {
        const interval = setInterval(() => {
            if( time === 0 ) {
                setActive({
                  ...active,
                  enable: false,
                  blocked: false,
                  refId: ''
                })

                if( question >= 5) navigate('/victory')    
                setQuestion( question + 1 )
            }

            setTime( time - 1 );

            if ( time === 16 ) {
                setIcon('redCrono');
            }

        }, 1000);

        return () => clearInterval( interval );
    }, [ time ])
    
  return (
    <View style={ styles.textContainer }>
        <Image source={ image }/>
        <Text style={{ ...styles.text, color: time < 16 ? theme.salmon_light : '#111' }}>{time}s</Text>
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