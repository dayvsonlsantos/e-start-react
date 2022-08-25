import style from "./Galeria.module.css";

function Galeria (){

    return(
        <div className={style.background}>
            <div className={style.container}>
                <div className={style.navContainer}>
                    <ul className={style.nav}>
                        <li className={style.navItems}>Home</li>
                        <li className={style.navItems}>Perfil</li>
                    </ul>
                </div>
                <div className={style.galeriaImg}>
                    <h2 className={style.navh2Galeria}>Galeria de Imagens</h2>
                    <span className={style.navpGaleria}>Aqui você encontra as imagens mais diversas.</span>
                </div>
                <div className={style.slider}>
                    <aside className={style.asideCard}>
                        <img className={style.imgCard} src="https://images.unsplash.com/photo-1507166763745-bfe008fbb831?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHRoZSUyMG9jZWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="Espuma das ondas do mar" />
                        <div className={style.conteudoCard}>
                            <h3 className={style.h3Card}>Heading</h3>
                            <p className={style.pCard}>This is a media card. You can use this section to describe the content.</p>
                            <button className={style.btnCard}>VER</button>
                        </div>
                    </aside>
                    <aside className={style.asideCard}>
                        <img className={style.imgCard} src="https://images.unsplash.com/photo-1507166763745-bfe008fbb831?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHRoZSUyMG9jZWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="Espuma das ondas do mar" />
                        <div className={style.conteudoCard}>
                            <h3 className={style.h3Card}>Heading</h3>
                            <p className={style.pCard}>This is a media card. You can use this section to describe the content.</p>
                            <button className={style.btnCard}>VER</button>
                        </div>
                    </aside>
                    <aside className={style.asideCard}>
                        <img className={style.imgCard} src="https://images.unsplash.com/photo-1507166763745-bfe008fbb831?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHRoZSUyMG9jZWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="Espuma das ondas do mar" />
                        <div className={style.conteudoCard}>
                            <h3 className={style.h3Card}>Heading</h3>
                            <p className={style.pCard}>This is a media card. You can use this section to describe the content.</p>
                            <button className={style.btnCard}>VER</button>
                        </div>
                    </aside>
                </div>       
                <footer className={style.footer}>
                    <h2 className={style.navh2}>Galeria</h2>
                    <span className={style.navp}>As mais belas imagens</span>
                    <span className={style.navp}>Copyright &copy; Dayvson 2022.</span>
                </footer>
            </div>
        </div>
    )
}

export default Galeria;
