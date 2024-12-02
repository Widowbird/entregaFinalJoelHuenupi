
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import { useState } from "react";


function App() {
  const [dark,setDark] = useState("App");
  const toggle = () =>{
    setDark((prevThem) => (prevThem === "App" ? "dark" : "App"))
  }



  return (
      <div className={dark}>
          <Navbar tema = {dark} toggleTema = {toggle}/>
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
