import { NativeRouter, Route, Routes } from 'react-router-native';
import { HomeScreen } from './pages/home/HomeScreen';
import { QuizScreen } from './pages/quiz/QuizScreen';



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


/*const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subHeader: {
    fontSize: 15
  }
});*/