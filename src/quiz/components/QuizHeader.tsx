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
        flexDirection: 'row',
        backgroundColor: theme.brown_base,
        alignItems: 'center',
    },
    text: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: theme.black,
    }
})
