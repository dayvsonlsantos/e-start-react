import React from "react";
import style from "./SideBar.module.css";

function SideBar (){
    return(
        <div className={style.sideBar}>
            <h1>Atividades</h1>
            
            <h2>Introdução à React e virtual DOM</h2>
                <ul>
                    <li><a href="/ola-mundo">Olá Mundo</a></li>
                    <li><a href="/componente">Componente</a></li>
                    <li><a href="/contador">Contador</a></li>
                    <li><a href="/mensagem">Mensagem</a></li>
                    <li><a href="/carta">Carta</a></li>
                    <li><a href="/contador-somar-e-subtrair">Somar e Subtrair</a></li>
                    
                </ul>
        </div>
    )
}

export default SideBar;