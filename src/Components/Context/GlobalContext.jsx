import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useEffect, useState, useReducer } from 'react';

// Crear el Context
const GlobalContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return state === "dark" ? "light" : "dark";
    default:
      return state;
  }
};

const lsFavs = JSON.parse(localStorage.getItem("favs"))||[];

// Proveedor del Context

// eslint-disable-next-line react/prop-types
const GlobalProvider = ({ children }) => {
  const [theme, dispatchTheme] = useReducer(themeReducer, "light");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favs, setFavs] = useState(lsFavs);

  // Función para alternar el tema
  const toggleTheme = () => {
    dispatchTheme({ type: "TOGGLE_THEME" });
  };

  // Función para consultar todos los usuarios
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Sincronizar favoritos con localStorage
  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]);

  // Nueva función para consultar un usuario por ID
  const fetchUserById = async (id) => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener el usuario:", error);
      throw error;
    }
  };

  // Función para limpiar todos los favoritos
  const clearFavs = () => {
    setFavs([]); // Limpia el estado
    localStorage.removeItem("favs"); // Borra los favoritos del localStorage
  };

  // Función para agregar un usuario a favoritos sin duplicados
  const addToFavorites = (user) => {
    if (favs.some((fav) => fav.id === user.id)) {
      console.log("El usuario ya está en favoritos");
      return;
    }
    const updatedFavs = [...favs, user];
    setFavs(updatedFavs);
    localStorage.setItem("favs", JSON.stringify(updatedFavs));
  };

  return (
    <GlobalContext.Provider
      value={{
        theme,
        toggleTheme,
        users,
        loading,
        fetchUsers,
        favs,
        setFavs,
        fetchUserById,
        clearFavs,
        addToFavorites, // Exportar la función
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};


export default GlobalProvider

export const useValueState =() => useContext(GlobalContext)