import React, { Component } from 'react';
import '../../assets/css/cadastro_banco.css'
import curva from '../../assets/img/curva-1.svg'
import curva_2 from '../../assets/img/curva-2.svg'
import logo_earth from '../../assets/img/earth bank.png'


export const Cadastro_banco = (props) => {

    return (
        <div className='Cadastro-banco'>
            <div className='Cadastro-div'>
                <img src={curva} alt="" className='curvas-cadastro' />
                <div className='Cadastro-div-form'>
                    <form action="" className='form-cadastro'>
                        <span id='user-logo'> <img className='user-logo' src={logo_earth} alt="" /></span>
                        <input className="cadastr-caixa" type="text" placeholder="Nome completo*" value={props.name} />
                        <input className="cadastr-caixa" type="text" placeholder="Cpf*" value={props.cpf} />
                        <input className="cadastr-caixa" type="number" placeholder="Idade*" />
                        <input className="cadastr-caixa" type="text" placeholder="Celular*" />
                        <input className="cadastr-caixa" type="text" placeholder="Email*" value={props.email} />
                        <input className="cadastr-caixa" type="date" placeholder="Data Nacimento*" />
                        <input className="cadastr-caixa" type="password" placeholder="Senha*" />
                        <input className="cadastr-caixa" type="password" placeholder="Repet Senha*" />
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