import { NativeRouter } from 'react-router-native';
import { AppRouter } from './src/router/AppRouter';


export default function App() {

  return (
    <NativeRouter>
      <AppRouter/>
    </NativeRouter>
  );
}