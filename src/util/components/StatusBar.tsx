import Constants from "expo-constants";
import { View, StyleSheet } from "react-native";
import { colors } from "../themes/Theme";

export const StatusBar = () => {

  return (
    <View style={ styles.statusbar }></View>
  )
}

const styles = StyleSheet.create({
    statusbar: {
        width: '100%',
        height: Constants.statusBarHeight,
        backgroundColor: colors.lightPrimary
    }
});
