import { useEffect, useReducer, useRef } from 'react';
import { Action, CateroryScore, ContextProviderProps } from '../../types';
import { UserContext } from './UserContext';
import { userReducer } from './userReducer';
import { types } from './reducerTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';


const categoryScore = [
  {
    name: 'Cambio Climático',
    puntos: 0,
    tiempo: 0,
  },
  {
    name: 'Biodiversidad',
    puntos: 0,
    tiempo: 0,
  },
  {
    name: 'Energía Renovable',
    puntos: 0,
    tiempo: 0,
  },
  {
    name: 'Reciclaje',
    puntos: 0,
    tiempo: 0,
  },
  {
    name: 'Recursos Hídricos',
    puntos: 0,
    tiempo: 0,
  },
]

export const UserProvider = ({ children }: ContextProviderProps) => {

  const [ state, dispatch ] = useReducer( userReducer, categoryScore )
  const bestScore = useRef(0);

  const updateData = ( item: CateroryScore ) => {
    const action: Action = {
      type: types.update,
      paylod: item
    }

    dispatch( action );
    storeData().then( () => console.log('se guarda el dato'));
  }

  const storeData = async() => {
    try {
      await AsyncStorage.clear();
      await AsyncStorage.setItem('data', JSON.stringify( state ));

    } catch (error) {
      console.log( error );
    }
  }


  const getData = async() => {
    try {
      const data = await AsyncStorage.getItem('data');
      const info: CateroryScore[] = JSON.parse(data!);

      info.forEach( i => updateData(i));
          
    } catch (error) {
      console.log( error );
    } 
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <UserContext.Provider value={{ state, bestScore, updateData }}>
        { children }
    </UserContext.Provider>
  )
}
