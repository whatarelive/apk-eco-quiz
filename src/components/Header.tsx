import { View, Text, StyleSheet } from "react-native";


export const Header = () => {

  return (
    <View style={ style.container }>
        
        <Text 
            style={ style.text }>
            Quiz App
        </Text>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        height: '25%',
        position: 'relative',
        backgroundColor: '#0ca907',
        borderBottomStartRadius: 30,
        borderBottomEndRadius: 30, 
        justifyContent: 'center',
        alignItems: 'center'
      },
    text: {
        color: '#e9ffe6',
        flexBasis: 'auto',
        marginVertical: 5,
        fontSize: 32,
        fontFamily: 'Roboto',
        fontWeight: '600'
    }
})
