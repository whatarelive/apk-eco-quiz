import { View, Image, Text, StyleSheet } from "react-native"
import { memo, useEffect } from "react";
import { useNavigate } from "react-router-native";
import { ProgressBar } from "../components/ProgressBar";
import { align, theme } from "../../util";
import { useImage } from "../../util";


export const SplashScreen = memo((): JSX.Element => {
  
  const navigate = useNavigate();
  const image = useImage('logo', 'uiImage');

  useEffect(() => {
    const timout = setTimeout(() => {
      navigate('/home', { replace: true });

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
    ...align.relative
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
    color: theme.green_base
  }
})
