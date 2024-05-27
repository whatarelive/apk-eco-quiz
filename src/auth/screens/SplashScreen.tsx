import { View, Image, Text, StyleSheet } from "react-native"
import { memo, useEffect } from "react";
import { useNavigate } from "react-router-native";
import { ProgressBar } from "../components/ProgressBar";
import { theme } from "../../util";
import { useImage } from "../../util";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';


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
        <Text style={ style.text }>Eco Quiz</Text>

        <ProgressBar />
    </View>
  )
})


const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: theme.brown_ligt
  },
  image: {
    marginTop: RFPercentage(30),
    width: RFValue(100),
    height: RFValue(160)
  },
  text: {
    fontSize: RFValue(20),
    fontWeight: '700',
    fontFamily: 'Rubik',
    color: theme.brown_dark
  }
})
