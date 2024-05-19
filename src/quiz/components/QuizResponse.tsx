import { Text, View, TouchableNativeFeedback, StyleSheet } from "react-native";
import { QuizResponseProps } from "../types";
import { theme } from "../../util";
import { NextQuizContext } from "../context/NextQuizContext";
import { useContext } from 'react';



export const QuizResponse = ( { resp }: QuizResponseProps ) => {

  const { active, setActive } = useContext( NextQuizContext );

  const handleClick = ( id: string ) => {
    if( active.blocked === true ) {
      setActive({
        type: '[Next] RefId change',
        paylod: { 
          refId: id,
        }
      });  
    };

    setActive({
      type: '[Next] True enable',
      paylod: { 
        enable: true,
        blocked: true,
        refId: id,
      }
    });
  }

  const beforeStyle = () => {
    return {
      backgroundColor: (resp.id !== active.refId ? theme.brown_clay : ( active.enable ? theme.green_base: theme.brown_clay )),
      borderColor: (resp.id !== active.refId ? theme.brown_lightDark : ( active.enable ? theme.green_dark: theme.brown_lightDark ))
    }
  }

  return (
    <TouchableNativeFeedback
      onPress={()=> handleClick( resp.id ) }>
        <View style={{ ...styles.container, ...beforeStyle() }}>
          <Text style={ styles.text }>{ resp.value }</Text>
        </View>
    </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      minHeight: 95,
      maxHeight: 95,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 24,
      marginVertical: 12, 
      paddingHorizontal: 10,
      borderRadius: 16,
      borderWidth: 4,
      borderColor: theme.brown_lightDark,
    },
    text: {
      flex: 1,
      display: 'flex',
      fontSize: 18,
      fontFamily: 'Rubik',
      fontWeight: '800',
      alignItems: 'center',
      color: theme.white
    }
});