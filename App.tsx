import { NativeRouter } from 'react-router-native';
import { AppRouter } from './src/router/AppRouter';
import { useFonts } from 'expo-font';
import { customFonts } from './src/util/Fonts/AppFonts';
import { UserProvider, ScoreProvider, NextQuizProvider } from './src/quiz/context';


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