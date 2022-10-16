import React, { Component } from 'react';
import '../../assets/css/usercadastro.css'
import { Link } from 'react-router-dom';
import celular from '../../assets/img/Vectary texture (4).png'

export const Usercadastro = () => {

    return (
        <nav className='cadastro'>
          <div className="quadrado" id='cadastro'>
          <img className='img-celular' src={celular} alt="" />
          </div>
          <img className='img-celular-2' src={celular} alt="" />
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
              <Link  to="/cadastro" className='cadastro-link' type='submit'> <button type='submit' className='continuar'>CONTINUAR</button></Link>
             <p className="text_tres">Ao continuar, você permite que o banco next entre em contato com você pelos canais informados.</p>
            </div>
          </div>
          <div className="quadrado1">
            <div className='div-verde'>
              </div>
          </div>
        </nav>
    )
}
