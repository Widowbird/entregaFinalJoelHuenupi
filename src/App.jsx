import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Layout from "./Components/Layouts/Layout";

function App() {  
  return (
    <div className="app">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
