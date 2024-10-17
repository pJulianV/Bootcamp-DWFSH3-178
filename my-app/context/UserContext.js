import React, { createContext, useState } from 'react';

// Crear contexto
export const UserContext = createContext();

// Proveedor de contexto
export const UserProvider = ({ children }) => {
  const [user, setUser ] = useState({
    name: '',
    email: '',
    age: '',
  });

  const updateUser  = (data) => {
    setUser (prevUser  => ({ ...prevUser , ...data }));
  };

  return (
    <User Context.Provider value={{ user, updateUser  }}>
      {children}
    </User Context.Provider>
  );
};