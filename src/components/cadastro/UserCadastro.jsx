import React, { Component } from 'react';
import '../../assets/css/usercadastro.css'
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
            <form className="caixa_text" action={`/cadastro`}>
              <input className="caixa" type="text" name="nome" placeholder="Nome completo*"  required />
              <input className="caixa" type="text" name="cpf" placeholder="Cpf*"  required/>
              <input className="caixa" type="password" name="password1" placeholder="Password*" required maxlength="10" min="8"/>
              <input className="caixa" type="password" name="password2" placeholder="Rept Password*" required maxlength="10" min="8"/>
              <input className="caixa" type="email" name="email" placeholder="Email*" required/>
              <input className="caixa" type="tel" name='celular' placeholder="Celular*" required/>
              <button type='submit' className='continuar'>CONTINUAR</button>
            </form> 
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
