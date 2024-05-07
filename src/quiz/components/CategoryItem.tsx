import { View, Image, Text, TouchableNativeFeedback, StyleSheet } from "react-native";
import { useNavigate } from "react-router-native";
import { useImage } from "../hooks/useImage";
import { Category } from "../types/HookTypes";
import { colors } from "../../util";



// TODO: Crear un contexto al cual enviar la categoria seleccionada.
export const CategoryItem = ({ category }: { category: Category }): JSX.Element => {

  const navigate = useNavigate();
  const image = useImage( category.urlIcon );

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
        </View>
        
      </TouchableNativeFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F9',
    borderRadius: 16,
    margin: 10,
  },
  sub_container: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    padding: 5
  },
  image: {
    width: 100,
    height: 120,
    borderRadius: 10,
    position: 'relative'  
  },
  text: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    position: 'relative',
    fontSize: 26,
    fontWeight: '500',
    color: colors.darkPrimary
  }
})
