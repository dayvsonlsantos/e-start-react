import {BrowserRouter, Routes, Route} from "react-router-dom";
import OlaMundo from './atividades/OlaMundo';
import SideBar from "./components/SideBar";
import "./App.css";
import Componente from "./atividades/Componente";
import Contador from "./atividades/Contador";
import Mensagem from "./atividades/Mensagem";

function App() {
  return (
    <main>
      <div className="sidebar">
        <SideBar/>
      </div>
      <div className="conteudo">
        <BrowserRouter>
            <Routes>
              <Route path="/ola-mundo" element={<OlaMundo/>}/>
              <Route path="/componente" element={<Componente/>}/>
              <Route path="/contador" element={<Contador/>}/>
              <Route path="/mensagem" element={<Mensagem/>}/>
            </Routes>
        </BrowserRouter>
      </div>
    </main>
  );
}

export default App;
