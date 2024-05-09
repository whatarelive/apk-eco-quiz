import { Text, View, Image, TouchableNativeFeedback, StyleSheet } from "react-native";
import { useNavigate } from "react-router-native";
import { colors } from "../../util";
import { useImage } from "../hooks/useImage";
import { QuizHeaderProps } from "../types";



export const QuizHeader = ( { icon, title }: QuizHeaderProps ): JSX.Element => {
    
    const navigate = useNavigate();
    const image = useImage( icon, 'iconImage' );
    const flecha = useImage('flecha', "uiImage");
    
    const onClick = () => {
        navigate('/home', { replace: true });
    }

    return (
        <View style={styles.container}>
            <Image
                source={image}
                style={styles.image}>
            </Image>

            <Text
                style={styles.text}>
                { title }
            </Text>

            <TouchableNativeFeedback
                onPress={ onClick }>
                <Image
                    source={flecha}
                    style={styles.flecha}>
                </Image>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: '10%',
        marginBottom: '5%',
        flexDirection: 'row',
        backgroundColor: colors.primary,
        alignItems: 'center',
    },
    text: {
        flex: 1,
        fontSize: 24,
        fontWeight: '500',
        color: colors.textPrimary,
    },
    image: {
        maxWidth: '16%',
        maxHeight: '77%',
        marginHorizontal: '3%',
    },
    flecha: {
        width: 25,
        height: 20,
        marginHorizontal: '5%',
    }
})
