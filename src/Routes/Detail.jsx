// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useValueState } from '../Components/Context/GlobalContext';

const Detail = () => {
  const { id } = useParams();
  const { fetchUserById, theme } = useValueState();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchUserById(id); // Llama a la función del contexto
        setUser(userData);
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };
    fetchData();
  }, [id, fetchUserById]);

  return (
    <div className={theme}>
      <h1>Detail Dentist ID: {id}</h1>
      {user ? (
        <div>
          <p><strong>Nombre:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Teléfono:</strong> {user.phone}</p>
          <p><strong>Sitio web:</strong> {user.website}</p>
        </div>
      ) : (
        <p>Cargando información...</p>
      )}
    </div>
  );
};

export default Detail;
