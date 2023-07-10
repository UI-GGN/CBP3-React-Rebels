import React, { createContext, useState } from 'react';

interface AuthContextValue {
  loggedInUser: String;
  profile: String;
  login: (user: any, profileData: any) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextValue>({
  loggedInUser: '-1',
  profile: 'guest',
  login: () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState<String>('-1');
  const [profile, setProfile] = useState<String>('guest');

  const login = (user: string, profileData: string) => {
    setLoggedInUser(user);
    setProfile(profileData);
  };

  const logout = () => {
    setLoggedInUser('-1');
    setProfile('guest');
  };

  const authContextValue: AuthContextValue = {
    loggedInUser,
    profile,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
