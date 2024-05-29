import { View, Image, StyleSheet, TouchableNativeFeedback } from "react-native";
import { useNavigate } from "react-router-native";
import { useContext } from 'react';
import { theme, useImage } from "../../../util";
import { QuizNextButtonProps } from "../../types";
import { NextQuizContext } from "../../context";
import { RFValue } from 'react-native-responsive-fontsize';




export const QuizNextButton = ({ category, question, setQuestion }: QuizNextButtonProps ): JSX.Element => {

  const navigate = useNavigate();
  const { active, setStatus, setActive } = useContext( NextQuizContext );
  const image = useImage( 'arrow_forward', 'uiImage' );

  const handleClick = () => {
    setActive({
      ...active,
        enable: false,
        blocked: false,
        refId: '',
    });

    setStatus( false );
  
    if ( question === 16 ) navigate(`/victory/${ category.name }`); 

    setQuestion( question + 1 );
  }

  return (
    <View style={{ ...styles.container, backgroundColor: theme.brown_veryDark }}>
      <TouchableNativeFeedback
        onPress={ handleClick }
      >
        <Image
          source={ image }
          style={ styles.icon }/>
      </TouchableNativeFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: RFValue(55),
    height: RFValue(55),
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: RFValue(28),
    height: RFValue(28)
  }
})