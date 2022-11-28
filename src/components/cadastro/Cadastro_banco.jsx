import React, { Component, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../../assets/css/cadastro_banco.css'
import curva from '../../assets/img/curva-1.svg'
import curva_2 from '../../assets/img/curva-2.svg'
import logo_earth from '../../assets/img/earth bank.png'
import axios from 'axios'

export const Cadastro_banco = (props) => {
    
    const [tokenAcess,setTokenAcess] = useState();
    const [tokenRefresh,setTokenRefresh] = useState();
    const API_PRIMEIRO_ACESSO = "http://127.0.0.1:8000/auth/users/";
    const API_CRIAR_TOKEN = "http://127.0.0.1:8000/auth/jwt/create";
    const API_URL_REGIS_USER = "http://127.0.0.1:8000/back_end/registerusuario/" ;  
    // onChange={(e) => setTokenAcess(e.target.value)}

    const [_params, _] = useSearchParams();
    let params = {};

    for (const [key, value] of _params) {
        params[key] = value;
    }
    
    async function CriarAuth()  {
        console.log("passei")
        const res = await axios.post(API_PRIMEIRO_ACESSO, {'email': params.email, 'username' : params.cpf, 'password' : params.password1})
        console.log(res)

        // if ("id" in data_1[0]){
        //     const {dadosToken} = await axios.post(API_CRIAR_TOKEN, data = {'username': params.cpf, 'password': params.password})
            
        //     setTokenRefresh(dadosToken[0]);
        //     setTokenAcess(dadosToken[1]);
        //     console.log(tokenAcess,tokenRefresh)
            
        // };
        
        //depois disso fazer a requisição passando o token via header para criar o usuário e demais funções do backend

    }
    const UserRegister = async () => {
        const { data } = await axios.post(API_URL_REGIS_USER)
        console.log(data)
    }
    
    return (
        <div className='Cadastro-banco'>
            <div className='Cadastro-div'>
                <img src={curva} alt="" className='curvas-cadastro' />
                <div className='Cadastro-div-form'>
                    <form action="" className='form-cadastro'>
                        <span id='user-logo'> <img className='user-logo' src={logo_earth} alt="" /></span>
                        <input className="cadastr-caixa" type="text" placeholder="Nome completo*" value={params.nome} disabled="false" />
                        <input className="cadastr-caixa" type="text" placeholder="Cpf*" value={params.cpf} disabled="false"/>
                        <input className="cadastr-caixa" type="number" placeholder="Idade*" />
                        <input className="cadastr-caixa" type="text" placeholder="Celular*" value={params.celular} disabled="false"  />
                        <input className="cadastr-caixa" type="text" placeholder="Email*" value={params.email} disabled="false" />
                        <input className="cadastr-caixa" type="date" placeholder="Data Nacimento*" />
                        <div className='UserLogin-Radio'>
                            <select >
                                <option >Feminino</option>
                                <option >Masculino</option>
                            </select>
                        </div>
                        <button type="button" onClick={CriarAuth}>enviar</button>                       
                    </form>
                </div>
                <img src={curva_2} alt="" className='curvas-cadastro' />
            </div>
        </div>
    )
}
