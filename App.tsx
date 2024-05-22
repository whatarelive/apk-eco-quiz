import { NativeRouter } from 'react-router-native';
import { AppRouter } from './src/router/AppRouter';
import { useFonts } from 'expo-font';
import { customFonts } from './src/util/Fonts/AppFonts';
import { NextQuizProvider } from './src/quiz/context/NextQuizProvider';
import { UserProvider } from './src/quiz/context/UserProvider';
import { ScoreProvider } from './src/quiz/context/ScoreProvider';


export default function App() {

  const [ loaded ] = useFonts({ ...customFonts })

  if ( !loaded ) {
    return null;
  }

  return (
    <NativeRouter>
      <UserProvider>
        <NextQuizProvider>  
          <ScoreProvider>
            <AppRouter/>
          </ScoreProvider>
        </NextQuizProvider>
      </UserProvider>
    </NativeRouter>
  );
}