import {BrowserRouter, Routes, Route} from "react-router-dom";
import OlaMundo from './atividades/OlaMundo';
import SideBar from "./components/SideBar";
import "./App.css";
import Componente from "./atividades/Componente";

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
            </Routes>
        </BrowserRouter>
      </div>
    </main>
  );
}

export default App;
