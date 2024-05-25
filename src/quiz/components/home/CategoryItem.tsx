import { View, Image, Text, TouchableNativeFeedback, StyleSheet } from "react-native";
import { useNavigate } from "react-router-native";
import { theme, useImage } from "../../../util";
import { CategoryItemProps } from "../../types";



export const CategoryItem = ( { category }: CategoryItemProps ): JSX.Element => {

  const navigate = useNavigate();
  const image = useImage( category.urlIcon, 'categoryImage' );

  const handleTouch = () => {
    navigate(`/quiz/${ category.id }/${1}`);
  };
  
  return (
    <View style={ styles.container }>
      <TouchableNativeFeedback
        onPress={ handleTouch }>

        <View style={ styles.sub_container }>
          <Image 
            source={ image } 
            style={ styles.image }>  
          </Image>
        
          <Text 
            style={ styles.text }>
            { category.name }
          </Text>

          <Text style={ styles.text2 }>
            20 Preguntas
          </Text>
        </View>
        
      </TouchableNativeFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.brown_ligt,
    borderRadius: 16,
    borderWidth: 5,
    borderColor: theme.brown_ligt,
    marginHorizontal: 15,
    marginVertical: 30,
  },
  sub_container: {
    flex: 1,
    width: 270,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 10
  },
  image: {
    width: 140,
    height: 160,
    borderRadius: 10,
    marginBottom: '5%',  
  },
  text: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: '25%',
    fontFamily: 'Rubik',
    textAlign: 'center',
    color: theme.brown_dark
  },
  text2: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Rubik',
    textAlign: 'center',
    color: theme.brown_lightDark  
  }
})
