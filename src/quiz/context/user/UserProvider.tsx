import { useEffect, useReducer } from 'react';
import { Action, CateroryScore, ContextProviderProps } from '../../types';
import { UserContext } from './UserContext';
import { userReducer } from './userReducer';
import { types } from './reducerTypes';


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

const init = () => {

}

export const UserProvider = ({ children }: ContextProviderProps) => {

  const [ state, dispatch ] = useReducer( userReducer, categoryScore )

  const updateData = ( item: CateroryScore ) => {
    const action: Action = {
      type: types.update,
      paylod: item
    }

    dispatch( action )
  }

  useEffect(() => {
    
  }, [ state ])
  

  return (
    <UserContext.Provider value={{ state, updateData }}>
        { children }
    </UserContext.Provider>
  )
}
