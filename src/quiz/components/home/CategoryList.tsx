import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { categories }  from "../../data/Quiz.json";
import { CategoryItem } from "./CategoryItem";
import { colors, align, theme } from '../../../util';



export const CategoryList = (): JSX.Element => {

  const renderList = () => categories.map(({ category }) => (
    <CategoryItem key={ category.id } category={ category }/> 
  ))

  return (
    <View style={ styles.container }>
      <Text 
        style={ styles.text }>
        Categorias de Juego
      </Text>

      <View 
        style={{ ...styles.separador, width: '70%' }}>
      </View>

      <ScrollView
        style={ styles.list }
        horizontal={ true }>
        {
          renderList()
        }
      </ScrollView>
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
    backgroundColor: theme.brown_base,
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