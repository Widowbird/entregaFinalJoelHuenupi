import Card from '../Components/Card';
import { useValueState } from '../Components/Context/GlobalContext';


// Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { users, loading, theme} = useValueState(); // Consumir datos del contexto
  

  return (
    <main className={theme}>
      <h1>Home</h1>
      <div className="card-grid">
        {/* Renderizado de las cards */}
        {loading ? ( "Cargando...") : (
          users.map((user) => (
            <Card
              key={user.id} // Es importante proporcionar una key única
              name={user.name}
              username={user.username}
              id={user.id}
            />
          ))
        )}
      </div>
    </main>
  );
};

export default Home;