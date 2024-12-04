import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({ name, username, id }) => {
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card" key = {id}>
        <Link to={"/detail/" + id}>
          <h3>Nombre: {name}</h3>
          <h4>Usuario: {username}</h4>
        </Link>
          {/* <Fetch /> */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
