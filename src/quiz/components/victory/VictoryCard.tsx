import { View, Text, StyleSheet } from "react-native"
import { theme } from "../../../util";
import { useContext, useEffect } from "react";
import { ScoreContext } from "../../context";
import { useRef } from 'react';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';



export const VictoryCard = () => {

  const { score, responseTime, aciertos } = useContext( ScoreContext );
  const refTime = useRef('');

  useEffect(() => {
    if ( responseTime.current > 60 ) {
      let cal = ( Math.round( responseTime.current / 60 ));
      
      refTime.current = `${cal} min`    
    
    } else {
      refTime.current = `${responseTime.current} s`;
    }

  }, [ score ])
  

  return (
    <View style={{ flexDirection: 'column', width: '100%', flex: 2}}>
        
        <View style={{ width: '100%', alignItems: 'center', marginTop: RFPercentage(4)}}>
          <Text style={ styles.text_SubHeader }>
            Puntuación
          </Text>
          <Text style={{ ...styles.text_Header, color: theme.brown_clay}} >
            { score.current }
          </Text>
        </View>

        <View style={{ flexDirection: 'row', marginTop: RFPercentage(4) }}>
      
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

            <View style={{ flexDirection: 'row', flex:1, justifyContent: 'center'}}>
              <Text style={ styles.text_Data }>
                {`${ responseTime.current }`}
              </Text>
              <Text style={{ ...styles.text_Data, color: theme.green_base }}>s</Text>
            </View>
          </View>
      
        </View>
      </View>
  )
}


const styles = StyleSheet.create({
  text_Header: {
    textAlign: 'center', 
    fontSize: RFValue(40), 
    fontFamily: 'Rubik', 
    fontWeight: '700', 
  },
  text_SubHeader: {
    textAlign: 'center', 
    fontSize: RFValue(20), 
    fontWeight: '600', 
    color: theme.black
  },
  text_Data: {
    textAlign: 'center', 
    fontSize: RFValue(28), 
    fontFamily: 'Rubik', 
    fontWeight: '800', 
  }
});