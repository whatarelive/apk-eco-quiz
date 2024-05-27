import { Route, Routes } from "react-router-native";
import { SplashScreen } from "../auth";
import { DataScreen, HomeScreen, QuizScreen, VictoryScreen } from "../quiz";



// Cofiguracion de las rutas de la APK.
export const AppRouter = () => {

  return (
    <Routes>
        <Route path="/" element={ <SplashScreen/> }/>
        <Route path="/home" element={ <HomeScreen/> }/>
        <Route path="/data" element={ <DataScreen/> }/>
        <Route path="/quiz/:categoryId/:questionId" element={ <QuizScreen/> }/>
        <Route path="/victory" element={ <VictoryScreen/> }/>
    </Routes>
  )
}
