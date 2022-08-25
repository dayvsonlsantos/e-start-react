import style from "./Navbar.module.css";

function Navbar (){

    return(
        <div className={style.background}>
            <div className={style.container}>
                <div className={style.navContainer}>
                    <ul className={style.nav}>
                        <span className={style.navspan}>Navbar</span>
                        <li className={style.navItems}>Home</li>
                        <li className={style.navItems}>Equipes</li>
                        <li className={style.navItems}>Sobre</li>
                    </ul>
                </div>            
                <footer className={style.footer}>
                    <h2 className={style.navh2}>Footer</h2>
                    <p className={style.navp}>Aprendendo a criar um Footer</p>
                </footer>
            </div>
        </div>
    )
}

export default Navbar;
