import React, { useState } from 'react';
import style from "./Contador.module.css";

function Contador (){
    
    const [count, setCount] = useState(0);
    
    const incrementar = () =>{
        setCount (count + 1);
    }

    const decrementar = () =>{
        setCount (count - 1);
    }

    return(
        <div className={style.background}>
            <div className={style.contador}>
                <h1>Contador</h1>
                <h2>Você clicou {count} vezes</h2>
                <div className={style.butoes}>
                    <button onClick={decrementar}>Decremento</button>
                    <button onClick={incrementar}>Incremento</button>
                </div>
            </div>
        </div>
    )
}

export default Contador;
