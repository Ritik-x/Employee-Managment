import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  // localStorage.clear()
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage();
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);

  return <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
