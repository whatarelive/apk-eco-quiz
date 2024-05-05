import { memo, useEffect, useRef } from "react"
import { Animated, View ,StyleSheet} from "react-native"
import { colors } from "../../util";


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
        outputRange: [0, 90]
    });

    // Estilos estaticos del componente
    const movingBarStyle = StyleSheet.create({
      root: {
        height: '100%',
        width: '25%',
        borderRadius: 16,
        backgroundColor: colors.primary,
        transform: [{ translateX: position }],
      },
      container: {
        width: 120,
        height: 5,
        marginVertical: 25,
        borderRadius: 16,
        backgroundColor: colors.acent,
      }
    });

  return (
      <View style={ movingBarStyle.container }>
        <Animated.View style={ movingBarStyle.root }/>
      </View>
  )
})
