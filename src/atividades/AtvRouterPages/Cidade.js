import { Link } from "react-router-dom";
import style from "./Cidade.module.css";

function Cidade (){

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
                    <h1 className={style.contentH1}>Cidade</h1>
                    <iframe className={style.maps} title="cidade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126418.55840494386!2d-35.00788895971332!3d-8.04216761976519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab196f88c446e5%3A0x3c9ef52922447fd4!2sRecife%20-%20PE!5e0!3m2!1spt-BR!2sbr!4v1661459419028!5m2!1spt-BR!2sbr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>    
            </div>
        </div>
    )
}

export default Cidade;
