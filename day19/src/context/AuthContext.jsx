import { createContext, useEffect, useState } from "react";
import { fetchProfile, loginUser, registerUser } from "../services/authService";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("contact_manager_token"));

  useEffect(() => {
    if (token) {
      fetchProfile()
        .then((data) => setUser(data))
        .catch(() => {
          localStorage.removeItem("contact_manager_token");
          setToken(null);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [token]);

  const login = async (credentials) => {
    const data = await loginUser(credentials);
    localStorage.setItem("contact_manager_token", data.access_token);
    setToken(data.access_token);
    const profile = await fetchProfile();
    setUser(profile);
  };

  const register = async (payload) => {
    const userData = await registerUser(payload);
    return userData;
  };

  const logout = () => {
    localStorage.removeItem("contact_manager_token");
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading, token }}>
      {children}
    </AuthContext.Provider>
  );
}
