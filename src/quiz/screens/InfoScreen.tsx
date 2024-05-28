import { View, ScrollView } from "react-native";
import { Header, StatusBar, theme } from "../../util";
import { InfoItem } from "../components";



export const InfoScreen = () => {

    const categories = ['cambio', "biodiversidad", 'energia', 'reciclaje', 'agua']

  return (
    <View style={{ flex: 1, backgroundColor: theme.brown_base }}>
        <StatusBar/>
        <Header title={"Estadisticas"}/>
        
        <ScrollView
            bounces={ false }
            overScrollMode='never'>
            {
                categories.map(( catg, index )=> <InfoItem  key={ index } categoria={ catg }/>)
            }
        </ScrollView>
    </View>
  )
}
