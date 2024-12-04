import { Link } from "react-router-dom";
import { useValueState } from "./Context/GlobalContext";

// eslint-disable-next-line react/prop-types
const Card = ({ name, username, id }) => {
  const { favs, setFavs } = useValueState(); // Accede a los favoritos actuales desde el contexto
  const newFav = { name, username, id }; // Define el objeto del nuevo favorito

  const addFav = () => {
    // Verifica si el usuario ya está en favoritos
    if (favs.some((fav) => fav.id === id)) {
      console.log("El usuario ya está en favoritos");
      return; // No hacer nada si ya existe
    }

    // Agregar el nuevo favorito al estado
    setFavs((prevFavs) => [...prevFavs, newFav]);
  };

  return (
    <div className="card" key={id}>
      <Link to={"/detail/" + id}>
        <h3>Nombre: {name}</h3>
        <h4>Usuario: {username}</h4>
      </Link>
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
