import { Link } from "react-router-dom";
import style from "./AtvRouter.module.css";

function AtvRouter (){

    return(
        <div className={style.background}>
            <div className={style.container}>
                <div className={style.navContainer}>
                    <ul className={style.nav}>
                        <span className={style.navspan}>Navbar</span>
                        <Link to="/router"><li className={style.navItems}>Home</li></Link>
                        <Link to="/musica"><li className={style.navItems}>Música</li></Link>
                        <Link to="/cidade"><li className={style.navItems}>Cidade</li></Link>
                    </ul>
                </div>
                <div className={style.content}>
                    <h1 className={style.contentH1}>Bem Vindo a Tela Inicial</h1>
                    <h2 className={style.contentH2}>Estudando sobre Router</h2>
                </div>
            </div>
        </div>
    )
}

export default AtvRouter;
