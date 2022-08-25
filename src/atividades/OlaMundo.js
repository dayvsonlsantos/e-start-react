import React from 'react';
import style from "./OlaMundo.module.css";

function OlaMundo (){
    return(
        <div className={style.background}>
            <div className={style.olaMundo}>
                <h1>Apredendo React</h1>
                <img src="https://www.iguiecologia.com/wp-content/uploads/2021/02/Coruja-buraqueira7-2.jpg" alt="Coruja buraqueira" />
                <pre>
                    
{`Por influência da mitologia grega.
Os gregos consideravam a noite como 
o momento do pensamento filosófico e
da revelação intelectual e a coruja,
por ser uma ave noturna, acabou
representando essa busca pelo saber.`}

                </pre>
            </div>
        </div>
    )
}

export default OlaMundo;
