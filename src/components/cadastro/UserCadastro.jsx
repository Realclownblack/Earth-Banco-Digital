import React, { Component } from 'react';
import '../../assets/css/usercadastro.css'
import { Link } from 'react-router-dom';
import celular from '../../assets/img/Vectary texture (4).png'
import logo_preto from '../../assets/img/earth bank preto.png'
import google_play from '../../assets/img/google-play.svg'
import app_store from '../../assets/img/app-store.svg'

export const Usercadastro = () => {

    return (
        <nav className='cadastro'>
          <div className="quadrado" id='cadastro'>
          <img className='img-celular' src={celular} alt="" />
          </div>
          <div className="quadrado2">
            <div className="form">
              <p className="text_pri">Quero Ser Earth</p>
              <p className='text_segun'>Preencha seus dados para começar o <br />
               processo de abertura de conta.</p>
              <form className="caixa_text" action="/cadastro">
                <input className="caixa" type="text" placeholder="Nome completo*" required />
                <input className="caixa" type="text" placeholder="Cpf*" required/>
                <input className="caixa" type="text" placeholder="Password*" required/>
                <input className="caixa" type="text" placeholder="Rept Password*" required/>
                <input className="caixa" type="text" placeholder="Email*" required/>
                <input className="caixa" type="text" placeholder="Telefone*" required/>
              </form>
              <Link  to="/cadastro" className='cadastro-link'> <button type='submit' className='continuar'>CONTINUAR</button></Link>
             <p className="text_tres">Ao continuar, você permite que o banco next entre em contato com você pelos canais informados.</p>
            </div>
          </div>
          <div className="quadrado1">
            <div className='div-verde'>
              <div className='div-app-store'>
                <img className='img-logo-preto' src={logo_preto} alt="" />
                <img src={google_play} alt="" />
                <img src={app_store} alt="" />
              </div>
              </div>
          </div>
        </nav>
    )
}
