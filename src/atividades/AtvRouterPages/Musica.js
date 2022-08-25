import { Link } from "react-router-dom";
import style from "./Musica.module.css";

function Musica (){

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
                <div className={style.contentMusic}>
                    <h1 className={style.contentH1}>Minha música favorita</h1>
                    <iframe className={style.music} title="Era Deus" src="https://open.spotify.com/embed/track/7FCZXSFH10ZcwgaGKXaDYj?utm_source=generator&theme=0" width="80%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>        
            </div>
        </div>
    )
}

export default Musica;
