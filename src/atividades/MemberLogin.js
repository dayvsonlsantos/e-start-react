import style from "./MemberLogin.module.css";
import img from "../assets/login.svg";

function MemberLogin (){

    return(
        <div className={style.background}>
            <div className={style.container}>
                <div className={style.loginCard}> 
                    <div className={style.loginImg}>
                        <img src={img} alt="Imagems ilustrando login" />
                    </div>
                    <div className={style.loginField}>
                        <h1>Member Login</h1>
                        <input className={style.inputLogin} type="email" name="email" id="email" placeholder="E-mail"/>
                        <input className={style.inputLogin} type="password" name="password" id="password" placeholder="Password"/>
                        <button className={style.buttonLogin}>Login</button>
                        <span className={style.spanLogin}>Forget Username / Password</span>
                        <span className={style.spanBottom}>Create your account &#8594;</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemberLogin;
