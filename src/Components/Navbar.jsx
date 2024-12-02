import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = ({tema , toggleTema}) => {
  const navigate = useNavigate();
  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <button onClick={() => navigate(-1)}>🔙</button>
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/contact">
        <h4>Contacto</h4>
      </Link>
      <Link to="/favs">
        <h4>Favoritos</h4>
      </Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={toggleTema}  >Change theme {tema === "App" ? "Dark" : "Light"}</button>

    </nav>
  )
}

export default Navbar