import '../../assets/css/Logado.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import negao from '../../assets/img/1664500946499.jfif'
import logo from '../../assets/img/earth bank icone preto.png'
import { Carousel_react } from '../caroussel/Caroussel_react';
import off_saldo from '../../assets/img/olho-vermelho.png'
import on_saldo from '../../assets/img/olho-aberto.png'
import sair from '../../assets/img/sair (1).png'

export const Logado = () =>{

    return(
        <div className='Logado-div'>
            <div className='Logado-user-info'>
                <img id='Logado-img-icon' src={logo} alt="" />
                <a href="" className='Logado-sair-button'><img className='Logado-sair-img' src={sair} alt="" /></a>
            </div>
            <div className='Logado-img-perfil'><img id='Logado-foto-perfil' src={negao} alt="" /></div>
            <div className='Logado-user-menu'>
                <a href="" className='Logado-button-saldo' ><span className='Logado-saldo'>R$ {'***********'} <img className='Logado-saldo-off' src={off_saldo} alt="" /></span></a>
            </div>
            <div className='Logado-user-viwer'>
                <Carousel_react/>
            </div>
            <div className='Logado-windgets'></div>
        </div>
    )
}