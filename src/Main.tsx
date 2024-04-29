import { NativeRouter, Route, Routes } from 'react-router-native';
import { HomeScreen } from './screens/HomeScreen';
import { QuizScreen } from './screens/QuizScreen';
//import { SplashScreen } from './pages/SplashScreen';



export const Main = () => {
  return (
    <>
        <NativeRouter>
            <Routes>
                <Route path='/' element={ <HomeScreen/> }></Route>
                <Route path='/quiz' element={ <QuizScreen/> }></Route>
            </Routes>
        </NativeRouter>
    </>
  )
}