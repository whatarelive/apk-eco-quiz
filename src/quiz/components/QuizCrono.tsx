import { View, Text, Image, StyleSheet } from "react-native"
import { useImage } from "../hooks"
import React, { useEffect, useState } from "react";
import { theme } from "../../util";
import { useNavigate } from 'react-router-native';



export const QuizCrono = ({ restart, question, setQuestion }: { restart: number, question: number, setQuestion: React.Dispatch<React.SetStateAction<number>> }) => {

    const [ icon, setIcon ] = useState('crono');
    const navigate = useNavigate();
    
    const image = useImage( icon, 'uiImage' );

    const [ time, setTime ] = useState( 60 );

    useEffect(() => {
        setIcon('crono')
        setTime( 60 );
    }, [ restart ])

    useEffect(() => {
        const interval = setInterval(() => {
            if( time === 0 ) {
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