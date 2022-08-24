import React from 'react';
import style from "./Componente.module.css";

function Componente (){
    return(
        <div className={style.componente}>
            <div className={style.inside}>
                <h1>Olá Mundo React</h1>
                <h2>Esse é meu componente com função :]</h2>
            </div>
        </div>
    )
}

export default Componente;
