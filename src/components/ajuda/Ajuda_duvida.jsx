import React, { Component } from 'react';
import '../../assets/css/Ajuda_duvida.css'

export const Ajuda_duvida = () => {

    return (
        <div>
            <div>
                <p>Ajuda</p>
                <p>Ficou alguma dúvida?</p>
                <p>Se a sua dúvida não estiver nas perguntas frequentes, fala com a gente!</p>
            </div>
            <div className='duvidas'>
                <div className='cartao_credito'>
                    <button>Como faço para ter o cartão de crédito no earth?</button>
                    <div>
                        <p>A gente pode te dar algumas dicas, que são:</p>
                        <div>
                            <ul>
                                <li>Não tenha restrições em seu nome,</li>
                                <li>As dívidas existentes devem estar de acordo com sua renda mensal,</li>
                                <li>Movimente a sua conta earth.</li>
                            </ul>
                        </div>
                        <p>Todos esses fatores são usados para analisar o seu perfil e atribuição de limites.</p>
                        <p>As análises e reanálises de crédito são feitas de forma automática e nelas consideramos informações do mercado financeiro, 
                            comportamentais de consumo e regras internas de concessão de crédito.</p>
                        <p>Se você quiser fazer uma análise na hora, dá pra pedir pelo app em dias úteis, das 08h00 às 17h00, clicando no Menu "Cartão" = 
                            "Pedir cartão de crédito".</p>
                    </div>
                </div>
                <div className='necessario'>
                    <p>É necessário ter uma renda mínima para abrir uma conta earth?</p>
                    <div>
                        <p>Não é necessário ter uma renda mínima para abrir a sua conta.</p>
                    </div>
                </div>
                <div className='dona_earth'>
                    <p> O earth é do Clowns Black Company?</p>
                    <div>
                        <p>
                        Sim. O earth é do Clowns Black Company. Unimos toda a 
                        comodidade de um Banco 100% digital com a solidez e segurança da Organização Clowns Black Company.
                        </p>
                        <p>Estamos sempre evoluindo para proporcionar uma experiência cada vez melhor aos nossos clientes.</p>
                    </div>
                </div>
                <div className='tem_agencia'>
                    <p>O earth tem agência?</p>
                    <div>
                        <p>O earth não possui agência própria, mas se precisar, pode ir em qualquer agência do Bradesco.</p>
                    </div>
                </div>
            </div>
            <div>
                <button>TODAS AS DUVIDAS</button>
                <p>ou</p>
                <a href="">ENTRE EM CONTATO</a>
            </div>
        </div>
    )
}
