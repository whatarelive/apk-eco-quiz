import { View, Image, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { StyleText, theme, useImage } from "../../../util";




export const InfoItem = ({ categoria }: { categoria: string }) => {

    const image = useImage( categoria, 'categoryImage');

    return (
        <View style={ styles.container }>
            <View style={{ justifyContent: 'center'}}>
                <Image  source={ image } style={{ width: RFValue(70), height: RFValue(70)}}/>
            </View>

            <View>
                <View >
                    <StyleText size={ 16 } color={ theme.brown_dark }>{categoria}</StyleText>
                </View>
                <View style={ styles.info_container }>
                    <View style={{ flex: 1 }}>
                        <StyleText size={ 13 } color={ theme.brown_clay }>Puntuación</StyleText>
                        <StyleText size={ 11 } color={ theme.brown_lightDark } >32163</StyleText>
                    </View>
                    <View style={{ flex: 1 }}>
                        <StyleText size={ 13 } color={ theme.brown_clay }>Tiempo</StyleText>
                        <View style={{ flexDirection: 'row', alignSelf: 'center'}}>
                            <StyleText size={ 11 } color={ theme.brown_lightDark } >1200</StyleText>
                            <StyleText size={ 11 } color={ theme.green_base } >s</StyleText>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        margin: 10,
        padding: 20, 
        borderWidth: 3, 
        borderRadius: 16, 
        borderColor: '#ffd8b5', 
        backgroundColor: theme.brown_ligt, 
    },
    info_container: {
        flex: 1, 
        width: '100%', 
        padding: '2%', 
        marginTop: '2%', 
        flexDirection: 'row', 
        justifyContent: 'space-around'
    }
})