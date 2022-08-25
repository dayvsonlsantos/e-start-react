import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./PessoasCadastradas.module.css"

function PessoasCadastradas(){

    const [cadastros, setCadastros] = useState([]);

    useEffect(() => {
        axios.get("https://randomuser.me/api/?results=8").then((res) => {
            setCadastros(res.data.results);
        })
    }, [])

    return(
        <div className={style.background}>
            <div className={style.container}>
                <h1 className={style.pessoascadH1}>Pessoas cadastradas</h1>
                <div className={style.card}>
                    {cadastros.map((cadastro, index) => (
                        <div key={index} className={style.perfil}>
                            <img className={style.perfilFoto} src={cadastro.picture.large} alt="opa 2" />
                            <span className={style.perfilSpan}>{cadastro.name.first}</span>
                        </div>
                    ))}   
                </div>
            </div>
        </div>
    )
}

export default PessoasCadastradas;