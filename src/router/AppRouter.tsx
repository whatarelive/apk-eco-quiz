import { Route, Routes } from "react-router-native";
import { SplashScreen } from "../auth";
import { HomeScreen, QuizScreen, VictoryScreen } from "../quiz";



// Cofiguracion de las rutas de la APK.
export const AppRouter = () => {

  return (
    <Routes>
        <Route path="/" element={ <SplashScreen/> }/>
        <Route path="/home" element={ <HomeScreen/> }/>
        <Route path="/quiz" element={ <QuizScreen/> }/>
        <Route path="/victory" element={ <VictoryScreen/> }/>
    </Routes>
  )
}
