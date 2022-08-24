import {BrowserRouter, Routes, Route} from "react-router-dom";
import OlaMundo from './atividades/OlaMundo';
import SideBar from "./components/SideBar";
import "./App.css";
import Componente from "./atividades/Componente";
import Contador from "./atividades/Contador";
import Mensagem from "./atividades/Mensagem";
import Carta from "./atividades/Carta";
import ContadorSomarSub from "./atividades/ContadorSomarSub";
import Login from "./atividades/Login";

function App() {
  return (
    <main>
      
        <BrowserRouter>
            <div className="sidebar">
              <SideBar/>
            </div>
            <Routes>
              <Route path="/ola-mundo" element={<OlaMundo/>}/>
              <Route path="/componente" element={<Componente/>}/>
              <Route path="/contador" element={<Contador/>}/>
              <Route path="/mensagem" element={<Mensagem/>}/>
              <Route path="/carta" element={<Carta nome={"Joana"} local={"Minas Gerais"}/>}/>
              <Route path="/contador-somar-e-subtrair" element={<ContadorSomarSub/>}/>
              <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
      
    </main>
  );
}

export default App;
