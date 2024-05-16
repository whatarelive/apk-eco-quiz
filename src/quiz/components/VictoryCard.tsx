import { View, Image, Text, StyleSheet } from "react-native"
import { CustomButton } from "./CustomButton";
import { useNavigate } from "react-router-native";
import { colors } from "../../util";
import { useImage } from "../hooks/useImage";



export const VictoryCard = () => {

    const trofeo = useImage('trofeo', 'uiImage');
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home');
    }

  return (
        <View style={ styles.container }> 
            <Image source={ trofeo } style={ styles.img }/>
            
            <Text style={ styles.text }>Felicidades !!!</Text>
            <Text style={ styles.text2 }>Quiz Completado</Text>

            <Text style={ styles.text3 }>Estadisticas</Text>

            <View style={{position: 'relative', width: '70%', marginBottom: 40}}>
                <View style={ styles.scoreBox }>
                    <Text style={ styles.text4 }>Puntuacion:</Text>
                    <Text style={ styles.text5 }>{'1240'}</Text>
                </View>
                <View style={ styles.scoreBox }>
                    <Text style={ styles.text4 }>Preguntas:</Text>
                    <Text style={ styles.text5 }>{'10'}</Text>
                </View>
                <View style={ styles.scoreBox }>
                    <Text style={ styles.text4 }>Correctas:</Text>
                    <Text style={ styles.text5 }>{'8'}</Text>
                </View>
                <View style={ styles.scoreBox }>
                    <Text style={ styles.text4 }>Tiempo:</Text>
                    <Text style={ styles.text5 }>{'16:08'}</Text>
                </View>
            </View>


            <CustomButton title="Volver" handleClick={ handleClick } />
        </View>
  )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '75%',
        alignItems: 'center',
        paddingVertical: 60,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: colors.background,
        shadowColor: colors.primary,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.86,
        elevation: 15
    },
    scoreBox: {
        flexDirection: 'row',
        margin: 3,
        alignSelf: 'center',
        justifyContent: 'flex-start'
    },
    img: { 
        position: 'relative',
        width: 130,
        height: 130
    },
    text: {
        position: 'relative',
        marginTop: 10,
        fontSize: 22,
        fontWeight: '600',

    },
    text2: {
        position: 'relative',
        fontSize: 26,
        fontWeight: '800',
    },
    text3: {
        position: 'relative',
        marginTop: 80,
        fontSize: 22,
        fontWeight: '700'
    },
    text4: {
        fontSize: 18,
        fontWeight: '400'
    }, 
    text5: {
        marginLeft: 20,
        fontSize: 18,
        fontWeight: '400'
    }
});