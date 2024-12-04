
// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from 'react';

// Crear el Context
export const GlobalContext = createContext();

// Proveedor del Context

// eslint-disable-next-line react/prop-types
export const GlobalProvider = ({ children }) => {
  const [theme, setTheme] = useState("App");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = "https://jsonplaceholder.typicode.com/users";

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "App" ? "dark" : "App"));
  };

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error en la respuesta de la API");
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error al hacer el fetch:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <GlobalContext.Provider value={{ theme, toggleTheme, users, loading, fetchUsers }}>
      {children}
    </GlobalContext.Provider>
  );
};
