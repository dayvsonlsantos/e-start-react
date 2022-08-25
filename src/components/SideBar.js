import React from "react";
import { Link } from "react-router-dom";
import style from "./SideBar.module.css";

function SideBar (){
    return(
        <div className={style.sideBar}>
            <h1>Atividades</h1>
            
            <h2>Introdução à React e virtual DOM</h2>
            <ul>
                <li><Link to="/">Início</Link></li>
                <li><Link to="/ola-mundo">Olá Mundo</Link></li>
                <li><Link to="/componente">Componente</Link></li>
                <li><Link to="/contador">Contador</Link></li>
                <li><Link to="/mensagem">Mensagem</Link></li>
                <li><Link to="/carta">Carta</Link></li>
                <li><Link to="/contador-somar-e-subtrair">Somar e Subtrair</Link></li>
                <li><Link to="/login">Login</Link></li>         
                <li><Link to="/member-login">Login - Membro</Link></li>     
                <li><Link to="/navbar">Navbar e Footer</Link></li>   
                <li><Link to="/github">Github</Link></li>  
                <li><Link to="/pessoas-cadastradas">Pessoas Cadastradas</Link></li>
                <li><Link to="/router">Router</Link></li>  
                <li><Link to="/cadastro">Cadastro</Link></li>        
            </ul>
        </div>
    )
}

export default SideBar;