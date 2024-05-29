import { Route, Routes } from "react-router-native";
import { SplashScreen } from "../auth";
import { InfoScreen, HomeScreen, QuizScreen, VictoryScreen } from "../quiz";



// Cofiguracion de las rutas de la APK.
export const AppRouter = () => {

  return (
    <Routes>
        <Route path="/" element={ <SplashScreen/> }/>
        <Route path="/home" element={ <HomeScreen/> }/>
        <Route path="/data" element={ <InfoScreen/> }/>
        <Route path="/quiz/:categoryId/:questionId" element={ <QuizScreen/> }/>
        <Route path="/victory/:category" element={ <VictoryScreen/> }/>
    </Routes>
  )
}
