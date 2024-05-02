import { Text, FlatList, StyleSheet, View } from 'react-native';
import { categories }  from "../../assets/data/Quiz.json";
import { CategoryItem } from "./CategoryItem";
import { RenderList } from '../types/PropsTypes';
import { primaryTheme } from '../themes/Theme';


export const CategoryList = () => {

  return (
    <>
      <Text 
        style={ styles.text }>
        Categorias de Juego
      </Text>

      <View 
        style={ styles.separador }>
      </View>

      <FlatList 
        style={ styles.list } 
        data={ categories }
        showsVerticalScrollIndicator={ false }
        stickyHeaderHiddenOnScroll={ false } 
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
    </>
  )
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
    margin: 5,
    alignContent: 'center',
  },
  separador: {
    width: '95%',
    height: 2,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: primaryTheme.colors.darkPrimary
  }, 
  text: {
    fontSize: 32,
    fontWeight: '700',
    color: primaryTheme.colors.acent
  }
});