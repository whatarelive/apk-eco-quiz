import { useEffect, useRef } from "react";
import { View, Text } from "react-native"


export const SplashScreen = () => {

  const first = useRef(null);

  useEffect(() => {

    const timout = setTimeout(() => {

    }, 1500)

    return () => clearTimeout( timout );
  }, [])

  return (
    <View>
        <Text>Hola</Text>
    </View>
  )
}
