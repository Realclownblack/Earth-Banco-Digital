import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Ajuda_duvida.css'

export const Ajuda_duvida = () => {
    const [toggle, setToggle] = useState(false)
    const [toggle1, setToggle1] = useState(false)
    const [toggle2, setToggle2] = useState(false)
    const [toggle3, setToggle3] = useState(false)
    return (
        <div className='Ajuda'>
            <div className='text_ajuda'>
                <p>Ajuda</p>
                <p id='ficou'>Ficou alguma dúvida?</p>
                <p>Se a sua dúvida não estiver nas perguntas frequentes, fala com a gente!</p>
            </div>
            <div className='duvidas'>
                <div className='accordionBox'>
                    <button className='accordionItem' type='button' onClick={() => {setToggle(!toggle)}}><span id='span-duvidas'>Como faço para ter o cartão de crédito no earth?
                        {toggle && (<div  className='accordionItem_dentro' >
                            <p>A gente pode te dar algumas dicas, que são:</p>
                            <div>
                                <ul className='ul-duvidas'>
                                    <li className='duvidas-li'>Não tenha restrições em seu nome,</li>
                                    <li className='duvidas-li'>As dívidas existentes devem estar de acordo com sua renda mensal,</li>
                                    <li className='duvidas-li'>Movimente a sua conta earth.</li>
                                </ul>
                            </div>
                            <p>Todos esses fatores são usados para analisar o seu perfil e atribuição de limites.</p>
                            <p>As análises e reanálises de crédito são feitas de forma automática e nelas consideramos informações do mercado financeiro, 
                                comportamentais de consumo e regras internas de concessão de crédito.</p>
                            <p>Se você quiser fazer uma análise na hora, dá pra pedir pelo app em dias úteis, das 08h00 às 17h00, clicando no Menu "Cartão" = 
                                "Pedir cartão de crédito".</p>
                        </div>)}
                    </span></button>
                    
                </div>
                <div className='accordionBox'>
                    <button className='accordionItem' type='button' onClick={() => {setToggle1(!toggle1)}}> <span id='span-duvidas'> É necessário ter uma renda mínima para abrir uma conta earth?   
                        {toggle1 &&(<div  className='accordionItem_dentro' >
                            <p>Não é necessário ter uma renda mínima para abrir a sua conta.</p>
                        </div> ) }   
                    </span></button>
                   
                </div>
                <div className='accordionBox'>
                    <button className='accordionItem' type='button' onClick={() => {setToggle2(!toggle2)}}> <span id='span-duvidas'> O earth é do Clowns Black Company?
                        {toggle2 &&(<div  className='accordionItem_dentro' >
                            <p>
                            Sim. O earth é do Clowns Black Company. Unimos toda a 
                            comodidade de um Banco 100% digital com a solidez e segurança da Organização Clowns Black Company.
                            </p>
                            <p>Estamos sempre evoluindo para proporcionar uma experiência cada vez melhor aos nossos clientes.</p>
                        </div>)}   
                    </span></button>
                   
                </div>
                <div className='accordionBox'>
                    <button className='accordionItem' type='button' onClick={() => {setToggle3(!toggle3)}} > <span id='span-duvidas'>O earth tem agência?
                        {toggle3 &&(<div className='accordionItem_dentro' >
                            <p>O earth não possui agência própria, mas se precisar, pode ir em qualquer agência do Bradesco.</p>
                        </div>)}
                    </span> </button>
                </div>
            </div>
            <div className='todas_duvidas'>
                <Link to={'/duvidas'} > <button className='abrir_duvidas'>TODAS AS DUVIDAS</button></Link>
                <p id='ou'>ou</p>
                <Link to={'/duvidas'} className='entre-contato'> <button  className='entre-contato'>ENTRE EM CONTATO</button></Link>
            </div>
        </div>
    )
}
