
import { Link } from "react-router-dom";
import { useValueState } from "./Context/GlobalContext";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
// eslint-disable-next-line react/prop-types
const Navbar = () => {

  const{theme,toggleTheme} = useValueState()

  return (
    <div className={theme}>
      <nav >
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
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
        <button onClick={toggleTheme}  >Change theme {theme === "App" ? "Dark" : "Light"}</button>
      </nav>
    </div>  
  )
}

export default Navbar