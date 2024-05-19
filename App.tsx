import { NativeRouter } from 'react-router-native';
import { AppRouter } from './src/router/AppRouter';
import { useFonts } from 'expo-font';
import { customFonts } from './src/util/Fonts/AppFonts';
import { NextQuizProvider } from './src/quiz/context/NextQuizProvider';


export default function App() {

  const [ loaded ] = useFonts({ ...customFonts })

  if ( !loaded ) {
    return null;
  }

  return (
    <NativeRouter>
      <NextQuizProvider>
        <AppRouter/>
      </NextQuizProvider>
    </NativeRouter>
  );
}