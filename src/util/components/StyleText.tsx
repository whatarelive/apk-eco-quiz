import { Text, TextStyle } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";


type TextProps = {
    size: number, 
    color: string,
    children: string, 
    justify?: any
}


export const StyleText = ({size, color, children, justify}: TextProps ) => {

    const style: TextStyle = {
        fontWeight: "700",
        fontFamily: "Rubik",
        fontSize: RFValue(size),
        justifyContent: justify, 
        textAlign: "center",
        color: color,
    }

  return <Text style={ style }>{children}</Text>
}
