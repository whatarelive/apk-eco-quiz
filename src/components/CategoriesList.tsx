import { View, Text, FlatList, StyleSheet } from "react-native";
import { categories } from "../../assets/data/Quiz.json";

// TODO: faltan estilos, hacer que las categorias sean funcionales, crear el componente categoryItem.
export const CategoriesList = () => {

  return (
    <>
        <Text>Categorias de Juego</Text>
        <FlatList 
             style={ styles.list }
             data={ categories }
             ItemSeparatorComponent={() => <Text/>}
             renderItem={({ item : { category } }) => (
               <View key={ category.id }>
                   <Text>{ category.name }</Text>
               </View>
         )}>
         </FlatList> 
    </>
  )
}

const styles = StyleSheet.create({
  list: {
    width: '90%',
  }
});