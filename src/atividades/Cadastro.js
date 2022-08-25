import style from "./Cadastro.module.css";
import imgreact from "../assets/react.png";

function Cadastro (){

    return(
        <div className={style.background}>
            <div className={style.containerLeft}>
                <div className={style.cadCard}>
                    <div className={style.cadheader}>
                        <h2 className={style.h2cad}>Cadastro</h2>
                        <span className={style.spancad}>Preencha os dados abaixo para começar.</span>
                    </div>
                    <input className={style.inputLogin} type="text" name="nome" id="nome" placeholder="Nome"/>
                    <input className={style.inputLogin} type="text" name="sobrenome" id="sobrenome" placeholder="Sobrenome"/>
                    <input className={style.inputLogin} type="email" name="email" id="email" placeholder="E-mail"/>
                    <input className={style.inputLogin} type="password" name="senha" id="senha" placeholder="Senha"/>
                    <button className={style.buttonLogin}>Concluir cadastro</button>
                </div>
            </div>
            <div className={style.containerRight}>
                <img className={style.logoreact} src={imgreact} alt="React logo" />
                <h1 className={style.h1react}>App React</h1>
            </div>
        </div>
    )
}

export default Cadastro;
