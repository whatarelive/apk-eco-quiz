import { Text, FlatList, StyleSheet, View } from 'react-native';
import { categories }  from "../../assets/data/Quiz.json";
import { CategoryItem } from "./CategoryItem";
import { RenderList } from '../types/PropsTypes';
import { colors, align } from '../../util';



export const CategoryList = (): JSX.Element => {

  return (
    <View style={ styles.container }>
      
      <Text 
        style={ styles.text }>
        Categorias de Juego
      </Text>

      <View 
        style={{ ...styles.separador, width: '70%' }}>
      </View>

      <FlatList 
        style={ styles.list } 
        data={ categories }
        showsVerticalScrollIndicator={ false }
        ItemSeparatorComponent={() => (
          <View 
            style={ styles.separador } >
          </View>
        )}
        renderItem={({item: {category}}: RenderList) => (        
          <CategoryItem 
            key={ category.id } 
            category={ category }>
          </CategoryItem> 
        )}/> 

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    maxHeight: '55%', 
    marginTop: 30, 
    marginBottom: '5%',
    ...align.relative
  },
  list: {
    width: '100%',
    alignContent: 'center',
  },
  separador: {
    width: '95%',
    height: 2,
    alignSelf: 'center',
    backgroundColor: colors.darkPrimary
  }, 
  text: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.acent
  }
});