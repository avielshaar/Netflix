import React, { createContext, useContext, useReducer } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const initialState = {
    userInfo: null,
  };

  const userReducer = (state, action) => {
    switch (action.type) {
      case 'USER_SIGNIN':
        return {
          ...state,
          userInfo: action.payload,
        };
      case 'USER_SIGNOUT':
        return {
          ...state,
          userInfo: null,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
};

export default UserContext;
