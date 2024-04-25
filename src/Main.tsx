import { NativeRouter, Route, Routes } from 'react-router-native';
import { HomeScreen } from './pages/HomeScreen';
import { QuizScreen } from './pages/QuizScreen';



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