import {BrowserRouter, Routes, Route} from "react-router-dom";
import OlaMundo from './atividades/OlaMundo';
import SideBar from "./components/SideBar";
import "./App.css";

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
            </Routes>
        </BrowserRouter>
      </div>
    </main>
  );
}

export default App;
