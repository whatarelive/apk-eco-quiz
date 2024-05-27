import { memo, useEffect, useRef } from "react"
import { Animated, View ,StyleSheet} from "react-native"
import { theme } from "../../util";
import { RFValue } from 'react-native-responsive-fontsize';


export const ProgressBar = memo((): JSX.Element => {

    // Valor base de la barra de progreso.
    const progress = useRef( new Animated.Value(0) );

    // Configuracion de las animaciones.
    const animationLoop = Animated.loop(
      Animated.sequence([
        Animated.timing( progress.current, { 
          toValue: 1, 
          duration: 700, 
          useNativeDriver: true 
        }),
        Animated.timing( progress.current, { 
          toValue: 0, 
          duration: 700, 
          useNativeDriver: true 
        })
      ])
    );

    // useEffect dispara la animacion y lo usa funcion de limpieza para eliminarla
    useEffect(() => {
      animationLoop.start();

      return () => animationLoop.stop();
    }, []);

    // Estilos dinamicos de la barra de carga
    const position = progress.current.interpolate({
        inputRange: [0, 1],
        outputRange: [0, RFValue(38)]
    });

    // Estilos estaticos del componente
    const movingBarStyle = StyleSheet.create({
      root: {
        height: '100%',
        width: '25%',
        borderRadius: 16,
        backgroundColor: theme.brown_base,
        transform: [{ translateX: position }],
      },
      container: {
        width: RFValue(50),
        height: RFValue(3),
        marginVertical: RFValue(15),
        borderRadius: 16,
        backgroundColor: theme.brown_dark,
      }
    });

  return (
      <View style={ movingBarStyle.container }>
        <Animated.View style={ movingBarStyle.root }/>
      </View>
  )
})
