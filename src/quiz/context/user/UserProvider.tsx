import { useState } from 'react';
import { ContextProviderProps } from '../../types';
import { UserContext } from './UserContext';



export const UserProvider = ({ children }: ContextProviderProps) => {

    const [ user, setUser ] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
        { children }
    </UserContext.Provider>
  )
}
