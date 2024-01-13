import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  username: string;
}

interface AuthContextProps {
  user: User | null;
  signIn: () => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = () => {
    // Implemente a lógica de autenticação aqui
    setUser({ username: 'exemplo' });
  };

  const signOut = () => {
    // Implemente a lógica de desconexão aqui
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}