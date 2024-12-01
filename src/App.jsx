import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/fooder";
import Postres from "./components/Postres";
import Home from "./components/Home";
import Recetas from "./components/Recetas";
import Contactos from "./components/Contactos";
import Pedidos from "./components/Pedidos";
import Perfil from "./components/Perfil";

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Header />
        <Routes>
 
          <Route path="/" element={<Home />} />
    
          <Route path="/postres" element={<Postres />} />
          <Route path="/recetas" element={<Recetas />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/perfil" element={<Perfil />} />

        
        </Routes>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
