import style from "./Carta.module.css";

function Carta ({nome, local}){

    return(
        <div className={style.carta}>
            <h1>Olá {nome} - {local}</h1>
            <p>Estou escrevendo essa carta por causa da atividade que os alunos vão fazer, okay.
            Não desiste, continue fazendo as atividas, treinando e praticamento.
            O céu é o limite!</p>
        </div>
    )
}

export default Carta;
