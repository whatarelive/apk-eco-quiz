import { View, ScrollView, StyleSheet } from 'react-native';
import { categories }  from "../../data/Quiz.json";
import { CategoryItem } from "./CategoryItem";
import { align, theme } from '../../../util';



export const CategoryList = (): JSX.Element => {

  const renderList = () => categories.map(({ category }) => (
    <CategoryItem key={ category.id } category={ category }/> 
  ))

  return (
    <View style={ styles.container }>
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
    flex: 2, 
    marginTop: '5%', 
    ...align.relative
  },
  list: {
    width: '100%',
    backgroundColor: theme.brown_base,
    alignContent: 'center',
  }
});