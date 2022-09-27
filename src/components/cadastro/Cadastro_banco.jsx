import React, { Component } from 'react';
import '../../assets/css/cadastro_banco.css'
import curva from '../../assets/img/curva-1.svg'
import curva_2 from '../../assets/img/curva-2.svg'


export const Cadastro_banco = () => {

    return (
        <div className='Cadastro-banco'>
            <div className='Cadastro-div'>
                <img src={curva} alt="" className='curvas-cadastro' />
                <div className='Cadastro-div-form'>
                    <span className='cadastro-caixa-div'>
                        <span className='cadastro-caixa'> <p className='text-cadastro-text'>Seja earth onde for ,</p></span>
                        <span className='cadastro-caixa'> <p className='text-cadastro-text'>peça seu cartao e use em qualquer lugar do universo</p></span>
                    </span>
                    <form action="" className='form-cadastro'>
                        <input className="cadastr-caixa" type="text" placeholder="Nome completo*" />
                        <input className="cadastr-caixa" type="text" placeholder="Nome completo*" />
                        <input className="cadastr-caixa" type="text" placeholder="Nome completo*" />
                        <input className="cadastr-caixa" type="text" placeholder="Nome completo*" />
                        <input className="cadastr-caixa" type="text" placeholder="Nome completo*" />
                        <input className="cadastr-caixa" type="text" placeholder="Nome completo*" />
                        <input className="cadastr-caixa" type="text" placeholder="Nome completo*" />
                        <input className="cadastr-caixa" type="text" placeholder="Nome completo*" />
                        <input className="cadastr-caixa" type="text" placeholder="Nome completo*" />
                        <input className="cadastr-caixa" type="text" placeholder="Nome completo*" />
                    </form>
                    <span className='cadastro-caixa-div-2'>
                        <span className='cadastro-caixa'> <p className='text-cadastro-text'>Cartao de credito para</p></span>
                        <span className='cadastro-caixa'> <p className='text-cadastro-text'>negativados,</p></span>
                        <span className='cadastro-caixa'> <p className='text-cadastro-text'>Limite liberado na hora apartir de R$500.00</p></span>
                    </span>
                </div>
                <img src={curva_2} alt="" className='curvas-cadastro' />
            </div>
        </div>
    )
}
