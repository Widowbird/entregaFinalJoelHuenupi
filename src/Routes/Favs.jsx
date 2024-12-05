import Card from "../Components/Card";
import { useValueState } from "../Components/Context/GlobalContext";

// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context
const Favs = () => {
  const { favs, theme, clearFavs } = useValueState(); // Agrega clearFavs del contexto

  return (
    <div className={theme}>
      <h1>Dentists Favs</h1>
      {/* Botón para eliminar todos los favoritos */}
      <div className="card-grid">
        {/* Renderiza los favoritos */}
        {favs.length > 0 ? (
          favs.map((user) => (
            <Card
              key={user.id}
              name={user.name}
              username={user.username}
              id={user.id}
            />
          ))
        ) : (
          <p>No tienes favoritos seleccionados.</p>
        )}
      </div>
      <button onClick={clearFavs} className="button">
        Eliminar Todos los Favoritos
      </button>
    </div>
  );
};

export default Favs;
