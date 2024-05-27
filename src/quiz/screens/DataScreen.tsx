import { ScrollView, View, Image, Text } from "react-native"
import { Header, StatusBar } from "../../util"


const DataItem = () => {


    return (
        <View>
            <Image/>

            <View>
                <View>
                    <Text>Titulo de Categoria</Text>
                    <Text>20 preguntas</Text>
                </View>

                <View>
                    <View>
                        <Text>Puntuacion</Text>
                        <Text>32163</Text>
                    </View>
                    <View>
                        <Text>Tiempo</Text>
                        <Text>12:00</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}


export const DataScreen = () => {

  return (
    <View>
        <StatusBar/>
        <Header title={"Estadisticas"}/>
        <Text>Estadisticas</Text>
        <ScrollView>
            <DataItem/>
            <DataItem/>
            <DataItem/>
            <DataItem/>
            <DataItem/>
        </ScrollView>
    </View>
  )
}
