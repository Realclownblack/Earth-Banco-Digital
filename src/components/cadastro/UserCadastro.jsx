import React, { Component } from 'react';
import '../../assets/css/usercadastro.css'

export const Usercadastro = () => {

    return (
        <nav id='cadastro'>
          <div className="quadrado">

          </div>
          <div className="quadrado2">
            <div className="form">
              <p className="text_pri">Quero Ser Earth</p>
              <p className='text_segun'>Preencha seus dados para começar o <br />
               processo de abertura de conta.</p>
              <div className="caixa_text">
                <input className="caixa" type="text" placeholder="Nome completo" />
                <input className="caixa" type="text" placeholder="Cpf"/>
                <input className="caixa" type="text" placeholder="Email"/>
                <input className="caixa" type="text" placeholder="Telefone"/>
              </div>
             <button className='continuar'>CONTINUAR</button>
             <p className="text_tres">Ao continuar, você permite que o banco next entre em contato com você pelos canais informados.</p>
            </div>
              
          </div>
          <div className="quadrado1">
          </div>
        </nav>
    )
}