import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import { useContext } from "react";
import { GlobalContext } from "./Components/Context/GlobalContext";
import Layout from "./Components/Layouts/Layout";


function App() {  
  const{theme} = useContext(GlobalContext);

  return (
    <div className={theme}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Route>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
