import { NativeRouter, Route, Routes } from 'react-router-native';
import { HomeScreen, QuizScreen } from './quiz';
import { SplashScreen } from './auth';


export const Main = () => {
  return (
    <>
        <NativeRouter>
            <Routes>
                <Route path='/' element={ <SplashScreen/> }></Route>
                <Route path='/home' element={ <HomeScreen/> }></Route>
                <Route path='/quiz' element={ <QuizScreen/> }></Route>
            </Routes>
        </NativeRouter>
    </>
  )
}