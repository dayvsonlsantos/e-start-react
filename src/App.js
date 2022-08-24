import {BrowserRouter, Routes, Route} from "react-router-dom";
import OlaMundo from './atividades/OlaMundo';
import SideBar from "./components/SideBar";
import "./App.css";
import Componente from "./atividades/Componente";
import Contador from "./atividades/Contador";
import Mensagem from "./atividades/Mensagem";
import Carta from "./atividades/Carta";
import ContadorSomarSub from "./atividades/ContadorSomarSub";

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
              <Route path="/carta" element={<Carta nome={"Joana"} local={"Minas Gerais"}/>}/>
              <Route path="/contador-somar-e-subtrair" element={<ContadorSomarSub/>}/>
            </Routes>
        </BrowserRouter>
      </div>
    </main>
  );
}

export default App;
