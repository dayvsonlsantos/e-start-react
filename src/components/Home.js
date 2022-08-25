import style from "./Home.module.css";

function Home (){

    return(
        <div className={style.background}>
            <div className={style.containerHome}>
                <h1 className={style.homeH1}>Bem vindo</h1>
                <h2 className={style.homeH2}>Atividades Finais de React</h2>
            </div>
        </div>
    )
}

export default Home;
