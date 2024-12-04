// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
   // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [user, setUser] = useState(null);
  const { id } = useParams(); // Obtén el ID de los parámetros dinámicos
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setUser(res.data); // Guarda los datos del usuario en el estado
      })
      .catch((err) => {
        console.error("Error al obtener los datos:", err);
      });
  }, [id]); // Dependencia para que se ejecute solo cuando cambia el ID

  return (
    <>
      <h1>Detail Dentist ID: {id}</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
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
    </>
  );
};

export default Detail;
