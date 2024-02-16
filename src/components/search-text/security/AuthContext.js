import { createContext, useContext, useState } from "react";
import { executeJwtAuthenticationService } from "../api/AuthenticationApiService";
import { apiClient } from "../api/ApiClient";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const [number, setNumber] = useState(10);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);

  const [username, setUsername] = useState(null);

  async function login(username, password) {
    try {
      const response = await executeJwtAuthenticationService(
        username,
        password
      );
      if (response.status === 200) {
        const jwtToken = "Bearer " + response.data.token;
        setToken(jwtToken);
        setIsAuthenticated(true);
        setUsername(username);

        apiClient.interceptors.request.use((config) => {
          console.log("intercepting and adding a token");
          config.headers.Authorization = jwtToken;
          return config;
        });
        return true;
      } else {
        logout();
        return false;
      }
    } catch (error) {
      logout();
      return false;
    }
  }

  function logout() {
    setToken(null);
    setIsAuthenticated(false);
    setUsername(null);
  }

  const valueToBeShared = {
    number,
    isAuthenticated,
    username,
    login,
    logout,
    token,
  };
  return (
    <AuthContext.Provider value={valueToBeShared}>
      {children}
    </AuthContext.Provider>
  );
}
