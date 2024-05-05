import { View, Image, Text, StyleSheet, ImageURISource } from "react-native"
import { memo, useEffect } from "react";
import { useNavigate } from "react-router-native";
import { ProgressBar } from "../components/ProgressBar";
import { colors } from "../../util/themes/Theme";

const image: ImageURISource = require('../../assets/images/screenlogo.png');

export const SplashScreen = memo(() => {

  const navigate = useNavigate();

  useEffect(() => {
    const timout = setTimeout(() => {
      navigate('/home', {replace: true});

    }, 2000)

    return () => clearTimeout( timout );
  }, [])


  return (
    <View style={ style.container }>
        <Image source={ image } style={ style.image }></Image>
        <Text style={ style.text }>Eco Quiz App</Text>

        <ProgressBar />
    </View>
  )
})


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
    color: colors.darkPrimary
  }
})
