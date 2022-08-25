import axios from "axios";
import { useState } from "react";
import style from "./Github.module.css";

function Github (){


    const [user, setUser] = useState("")
    const [data, setData] = useState({})
    const [exibirUser, setExibirUser] = useState(false)

    const acharUsuario = (e) => {
        e.preventDefault();
        if(user !== ""){
            axios.get(`https://api.github.com/users/${user}`).then((res) => {
                setData(res.data)
                setExibirUser(true)
            })
        }else{
            console.log("Nenhum usuário informado")
            setExibirUser(false)
        }
        
   
    }

    const setUsuario = (e) =>{
        e.preventDefault();
        setUser(e.target.value)
    }

    return(
        <div className={style.background}>
            <div className={style.container}>
                <div className={style.searchUser}>
                    <h2 className={style.h2github}>Github</h2>
                    <input className={style.inputgithub} type="text" name="usuario" id="usuario" placeholder="Informar usuário do Github" onChange={setUsuario}/>
                    <button className={style.buttongithub} onClick={acharUsuario}>Pesquisar</button>
                </div>
                {exibirUser ? (
                    <div className={style.usuariogithub}>
                        <img className={style.imggithub} src={data.avatar_url} alt="Foto de perfil" />
                        <span className={style.spanUsergithub}>{data.login}</span>
                        <span className={style.spangithub}>{data.name}</span>
                        <span className={style.spangithub}>{data.location}</span>
                        <div className={style.followgithub}>
                            <span><strong>Followers:</strong> {data.followers}</span>
                            <span> <strong>Followers:</strong> {data.following}</span>
                        </div>
                        <a href={data.html_url}> <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="Github Badge" /> </a>
                    </div>
                ): null}
            </div>
        </div>
    )
}

export default Github;
