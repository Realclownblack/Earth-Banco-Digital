import '../../assets/css/userlogin.css'
import { Link } from 'react-router-dom';
import curva_3 from  '../../assets/img/curva-3.svg'
import curva_4 from  '../../assets/img/curva-4.svg'
import mari from  '../../assets/img/MariSimoes.png'
export const UserLogin = () =>{
    return(
        <div className='UserLogin-div'>
            <img className='user-login-img' src={curva_4} alt="" />
            <div className='UserLogin-todos'>
                <div className='UserLogin-div-form'>
                    <div className='text-login'>
                        <p>Login</p>
                    </div>
                    <form action="" className='UserLogon-form'>
                        <input className="UserLogin-caixa" type="text" placeholder="Cpf*" />
                        <input className="UserLogin-caixa" type="text" placeholder="Senha*"/>
                    </form>
                    <button className='UserLogin-logar'>Logar</button>
                     <Link to={'/cadastro'} className='link-user'>Não tem conta?,  faça seu cadastro</Link>
                </div>             
            </div>
            <div className='img-userlogin-baixo'>
                <img className='img-mari' src={mari} alt="" />
                <img className='user-login-img-2' src={curva_3} alt="" />                
            </div>

        </div>
    )
}