import React from "react";
import style from "./SideBar.module.css";

function SideBar (){
    return(
        <div className={style.sideBar}>
            <h1>Atividades</h1>
            
            <h2>Introdução à React e virtual DOM</h2>
                <ul>
                    <li><a href="/ola-mundo">Ola Mundo</a></li>
                    <li><a href="/componente">Componente</a></li>
                    <li><a href="/contador">Contador</a></li>
                </ul>
        </div>
    )
}

export default SideBar;