import React, { createContext, useState } from 'react';
import { User } from 'src/types/Interfaces';

interface AuthContextValue {
  loggedInUser: User;
  login: (user: User) => void;
  logout: () => void;
}
const defaultUser = {
  id: '-1',
  username: 'guest',
  password: '*****',
  profile: 'guest',
  name: 'guest user',
};
export const AuthContext = createContext<AuthContextValue>({
  loggedInUser: defaultUser,
  login: () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState<User>(defaultUser);

  const login = (user: User) => {
    setLoggedInUser(user);
  };

  const logout = () => {
    setLoggedInUser(defaultUser);
  };

  const authContextValue: AuthContextValue = {
    loggedInUser,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
