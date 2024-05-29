import { View, ScrollView } from "react-native";
import { Header, StatusBar, theme } from "../../util";
import { InfoItem } from "../components";
import { useContext } from "react";
import { UserContext } from "../context";



export const InfoScreen = () => {

  const { state } = useContext( UserContext );

  return (
    <View style={{ flex: 1, backgroundColor: theme.brown_base }}>
        <StatusBar/>
        <Header title={"Estadisticas"}/>
        
        <ScrollView
            bounces={ false }
            overScrollMode='never'>
            {
              state.map(( catg, index )=> <InfoItem  key={ index } categoria={ catg }/>)
            }
        </ScrollView>
    </View>
  )
}
