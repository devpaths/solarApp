import React , {createContext} from 'react'

export const AuthContext =createContext();

export const AuthProvider = ({children}) => {
    return (
  <AuthContext.Provider value="Test value">{children}</AuthContext.Provider>
);
}

