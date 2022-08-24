import React, { useState } from 'react';
import style from "./ContadorSomarSub.module.css";

function ContadorSomarSub (){
    
    const [count, setCount] = useState(0);
    
    const somar = () =>{
        setCount (count + 1);
    }

    const subtrair = () =>{
        setCount (count - 1);
    }

    return(
        <div className={style.contadorSomarSub}>
            <h1 className={style.h1contador}>Contador =&#62; {count}</h1>
            <div className={style.butoes}>
                <button className={style.verde} onClick={somar}>Somar</button>
                <button className={style.azul} onClick={subtrair}>Subtrair</button>
            </div>
        </div>
    )
}

export default ContadorSomarSub;
