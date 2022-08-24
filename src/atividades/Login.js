import style from "./Login.module.css";

function Login (){

    return(
        <div className={style.background}>
            <div className={style.container}>
                <div className={style.loginCard}> 
                    <input className={style.inputLogin} type="text" name="username" id="username" placeholder="username"/>
                    <input className={style.inputLogin} type="password" name="password" id="password" placeholder="password"/>
                    <button className={style.buttonLogin}>Login</button>
                    <span className={style.spanLogin}>Not register? Create an account</span>
                </div>
            </div>
        </div>
    )
}

export default Login;
