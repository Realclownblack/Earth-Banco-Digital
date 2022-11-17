import React, { Component } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../../assets/css/cadastro_banco.css'
import curva from '../../assets/img/curva-1.svg'
import curva_2 from '../../assets/img/curva-2.svg'
import logo_earth from '../../assets/img/earth bank.png'
import axios from 'axios'

export const Cadastro_banco = (props) => {
    
    const [_params, _] = useSearchParams();
    let params = {};

    const API_URL_REGIS_USER = "http://localhost:3000/back_end/registerusuario" ;  

    const UserRegister = async () => {
        const { data } = await axios.post(API_URL_REGIS_USER)
        console.log(data)
    }
    
    for (const [key, value] of _params) {
        params[key] = value;
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
                    </form>
                </div>
                <img src={curva_2} alt="" className='curvas-cadastro' />
            </div>
        </div>
    )
}
