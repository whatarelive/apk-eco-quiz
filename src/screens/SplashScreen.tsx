import { useEffect } from "react";
import { View, Text } from "react-native"
import { useNavigate } from "react-router-native";


export const SplashScreen = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const timout = setTimeout(() => {
      navigate('/home', {replace: true});
    }, 3000)

    return () => clearTimeout( timout );
  }, [])

  return (
    <View>
        <Text>Hola</Text>
    </View>
  )
}
