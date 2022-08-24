import React, { useState } from 'react';
import style from "./Mensagem.module.css";

function Mensagem (){

    return(
        <div className={style.mensagem}>
            <h1>Mensagem de Experança</h1>
            <p>Há pessoas que choram por saber que as rosas têm espinho. Há outras que sorriem por saber que os espinhos têm rosas! (Machado de Assis).</p>
        </div>
    )
}

export default Mensagem;
