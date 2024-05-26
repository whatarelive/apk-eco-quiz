import { View, Text, StyleSheet } from "react-native"
import { theme } from "../../../util";
import { useContext, useEffect } from "react";
import { ScoreContext } from "../../context";
import { useRef } from 'react';



export const VictoryCard = () => {

  const { score, responseTime, aciertos } = useContext( ScoreContext );
  const refTime = useRef('');

  useEffect(() => {
    if ( responseTime.current > 60 ) {
      refTime.current = `${Math.fround(responseTime.current / 60)} min`    
    
    } else {
      refTime.current = `${responseTime.current} s`;
    }

  }, [])
  

  return (
    <View style={{ flexDirection: 'column', width: '100%', flex: 2}}>
        
        <View style={{ width: '100%', alignItems: 'center', marginTop: '5%'}}>
          <Text style={ styles.text_SubHeader }>
            Puntuación
          </Text>
          <Text style={{ ...styles.text_Header, color: theme.brown_clay}} >
            { score.current }
          </Text>
        </View>

        <View style={{ flexDirection: 'row', marginTop: '10%' }}>
      
          <View style={{ flexDirection: 'column', flex: 1, alignItems: 'center'}}>
            <Text style={ styles.text_SubHeader }>Aciertos</Text>
            
            <View style={{ flexDirection: 'row'}}>
              <Text style={{ ...styles.text_Data, color: theme.green_base }}>
                { aciertos.current }
              </Text>           
              <Text style={ styles.text_Data }>
                /20
              </Text>
            </View>
          </View>
      
          <View style={{ flexDirection: 'column', flex: 1}}>
            <Text style={ styles.text_SubHeader }>
              Tiempo
            </Text>
            <Text style={ styles.text_Data }>
              {refTime.current}
            </Text>
          </View>
      
        </View>
      </View>
  )
}


const styles = StyleSheet.create({
  text_Header: {
    textAlign: 'center', 
    fontSize: 44, 
    fontFamily: 'Rubik', 
    fontWeight: '700', 
  },
  text_SubHeader: {
    textAlign: 'center', 
    fontSize: 24, 
    fontWeight: '600', 
    color: theme.black
  },
  text_Data: {
    textAlign: 'center', 
    fontSize: 32, 
    fontFamily: 'Rubik', 
    fontWeight: '800', 
  }
});