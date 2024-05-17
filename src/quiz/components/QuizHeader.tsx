import { Text, View, StyleSheet } from "react-native";
import { theme } from "../../util";
import { QuizHeaderProps } from "../types";
import { NavButton } from "./NavButton";



export const QuizHeader = ( { title }: QuizHeaderProps ): JSX.Element => {

    return (
        <View style={styles.container}>
            <NavButton type={"back-arrow"} icon1={"flecha"} icon2={"flecha"}/>

            <Text style={styles.text}>{`${title} - Quiz`}</Text>

            <NavButton type={"theme"} icon1={"luna"} icon2={"sun"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '8%',
        marginBottom: '5%',
        paddingHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: theme.brown_ligt,
    },
    text: {
        flex: 1,
        fontSize: 22,
        fontFamily: 'Rubik',
        textAlign: 'center',
        fontWeight: '700',
        color: theme.brown_veryDark,
    }
})
