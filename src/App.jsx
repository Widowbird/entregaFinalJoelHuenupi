
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import { useContext } from "react";
import { GlobalContext } from "./Components/Context/GlobalContext";


function App() {  
  const{theme} = useContext(GlobalContext);

  return (
      <div className={theme}>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/favs" element={<Favs />} />
              <Route path="/detail/:id" element={<Detail />} />
            </Routes>
          <Footer/>
      </div>
  );
}

export default App;
