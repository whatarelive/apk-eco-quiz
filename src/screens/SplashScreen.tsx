import { useEffect } from "react";
import { View, Image, Text, StyleSheet, ImageURISource } from "react-native"
import { useNavigate } from "react-router-native";
import { primaryTheme } from "../themes/Theme";


export const SplashScreen = () => {

  const navigate = useNavigate();
  const image: ImageURISource = require('../../assets/screenlogo.png');

  useEffect(() => {
    const timout = setTimeout(() => {
      //navigate('/home', {replace: true});
    }, 2000)

    return () => clearTimeout( timout );
  }, [])


  return (
    <View style={ style.container }>
        <Image source={ image } style={ style.image }></Image>
        <Text style={ style.text }>Eco Quiz App</Text>

        <View style={ style.charge }></View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'

  },
  image: {
    marginTop: '45%',
    margin: 10,
    position: 'relative',
    width: 140,
    height: 230
  },
  text: {
    position: 'relative',
    fontSize: 32,
    fontWeight: '500',
    color: primaryTheme.colors.darkPrimary
  },
  charge: {
    marginTop: 12, 
    borderColor: primaryTheme.colors.primary,
    borderStyle: 'solid',
    borderWidth: 5,
    width: 40,
    height: 40,
    borderRadius: 60
  }
})
