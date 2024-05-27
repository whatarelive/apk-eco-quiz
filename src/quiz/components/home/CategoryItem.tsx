import { View, Image, Text, TouchableNativeFeedback, StyleSheet } from "react-native";
import { useNavigate } from "react-router-native";
import { theme, useImage } from "../../../util";
import { CategoryItemProps } from "../../types";
import {RFValue} from "react-native-responsive-fontsize";



export const CategoryItem = ( { category }: CategoryItemProps ): JSX.Element => {

  const navigate = useNavigate();
  const image = useImage( category.urlIcon, 'categoryImage' );

  const handleTouch = () => {
    navigate(`/quiz/${ category.id }/${1}`);
  };
  
  return (
    <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(theme.brown_base, false)}
        onPress={ handleTouch }>

    <View style={ styles.container }>
        <View style={ styles.sub_container }>
          
          <Image source={ image } style={ styles.image }></Image>
          
          <Text 
            style={ styles.text }>
            { category.name }
          </Text>

          <Text style={ styles.text2 }>
            20 Preguntas
          </Text>
        </View>
        
    </View>
      </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.brown_ligt,
    borderRadius: 16,
    borderWidth: 4,
    borderColor: '#ffd8b5',
    marginHorizontal: RFValue(15),
    marginVertical: RFValue(30),
  },
  sub_container: {
    flex: 1,
    width: 270,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '5%',
  },
  image: {
    width: RFValue(120),
    height: RFValue(120),  
  },
  text: {
    fontSize: RFValue(24) ,
    fontWeight: '700',
    fontFamily: 'Rubik',
    textAlign: 'center',
    color: '#8a4b39',
    marginBottom: RFValue(20)
  },
  text2: {
    fontSize: RFValue(20),
    fontWeight: '700',
    fontFamily: 'Rubik',
    textAlign: 'center',
    color: '#cd8f7d',
  }
})
