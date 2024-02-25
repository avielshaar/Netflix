import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const get = () => {
    return JSON.parse(localStorage.getItem('userInfo'));
  };

  const save = (data) => {
    localStorage.setItem('userInfo', JSON.stringify(data));
  };

  const remove = () => {
    localStorage.removeItem('userInfo');
  };

  return <UserContext.Provider value={{ get, save, remove }}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
export default UserContext;
