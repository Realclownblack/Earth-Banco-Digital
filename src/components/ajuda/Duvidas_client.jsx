import React, { Component } from 'react';
import '../../assets/css/Duvidas_client.css'
import duvidas_img from '../../assets/img/cover-duvidas.png'

export const Duvidas_client = () => {

    return (
        <div className='Duvidas_client-div'>
            <div className='Duvidas_client-div-info'>
                <div className='Duvidas_client-div-info-1'>
                    <p id='duvidas-p'>
                    Tá com alguma dúvida?
                    </p>
                    <span id='duvidas-span'>
                    Reunimos em categorias as respostas para as suas principais dúvidas. É só clicar no assunto que procura para filtrar as perguntas já respondidas.
                    </span>
                </div>
                <div className='Duvidas_client-div-info-2'>
                    <img id='duvidas-img' src={duvidas_img} alt="" />
                </div>
            </div>
            <div className='Duvidas_client-div-respostas'>
                <div  className='Duvidas_client-div-categorias'>

                </div>
            </div>
            
        </div>
    )
}
