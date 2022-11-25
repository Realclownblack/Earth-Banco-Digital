import '../../assets/css/userlogin.css'
import { Link } from 'react-router-dom';
import curva_3 from  '../../assets/img/curva-3.svg'
import curva_4 from  '../../assets/img/curva-4.svg'
import mari from  '../../assets/img/MariSimoes.png'
import { useState } from 'react';
import '../../firebase'
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { app } from '../../firebase';


export const UserLogin = () =>{

    const [cpf,setCpf] = useState()

    const db = getFirestore(app)
    const LogsColletionRef = collection(db, "Logs")

    async function criarLogs() {
        var today = new Date(),
        date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate(),
        hora = today.getHours()+ ':' + today.getMinutes();

    
        const logs = await  addDoc(LogsColletionRef, {
            cpf,date,hora
        });
        console.log(logs)
    }
     
    
    return(
        <div className='UserLogin-div'>
            <img className='user-login-img' src={curva_4} alt="" />
            <div className='UserLogin-todos'>
                <div className='UserLogin-div-form'>
                    <div className='text-login'>
                        <p>Login</p>
                    </div>
                    <form action="" className='UserLogon-form'>
                        <input className="UserLogin-caixa" type="text" placeholder="Cpf*" value={cpf} onChange={(e) => setCpf(e.target.value)}/>
                        <input className="UserLogin-caixa" type="text" placeholder="Senha*"/>
                    </form>
                    <Link onClick={criarLogs}  className='UserLogin-logar'>Logar</Link>
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