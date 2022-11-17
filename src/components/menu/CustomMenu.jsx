import React, { Component } from 'react';
import { fallDown as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom';

class CustomMenu extends Component {
    state = {
        menuAberto: false

    } 

    
    render() { 

    const abriuMenu = () =>{
        
        this.state.menuAberto = true;
        this.setState({menuAberto: this.state.menuAberto});
        document.body.style.overflowY = "hidden";
    }

    const fechouMenu = () => {
        this.state.menuAberto = false;
        this.setState({menuAberto: this.state.menuAberto});
        document.body.style.overflowY = "auto";
    }
        return (
            <Menu  className={scroll ? "customMenu Aparecer_burger-button" : "customMenu"} onOpen={ abriuMenu } isOpen={ this.state.menuAberto }  onClose={fechouMenu}    >
            <div className='Opcoes'>
                    <div className='colun0'>
                        <div className='informacoes'>
                            <p className='text_titulo_conta'>Conta</p>
                            <span>
                                <p className='text_titulo_menu'>Conta Earth</p>
                                <p className='text_span_menu'>Conta grátis com serviços ilimitados.</p>
                            </span>
                            <p className='text_titulo_menu'>EarthJoy</p>
                            <p className='text_span_menu'>Conta digital e gratuita para menores de idade, com toda magia da Disney.</p>
                        </div>
                        <hr id='hr-menu' />
                        <p className='text_tem'>Tem no Earth</p>
                    </div>                
                <div className='colunas'>
                    
                    <div className='colun1'>
                        <ul>
                            <li>
                                <div className='caixa_menu'>
                                    <span className='span-text'>
                                        <p className='span-menu-titulo'>Cartões earth</p>
                                        <p>Cartões sem anuidade, pagamentos digitais e mimos exclusivos.</p>
                                        <Link to={'/temaearth'} className="menu-item"><a className="menu-item">Conhecer</a></Link>
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className='caixa_menu'>
                                    <span className='span-text'>
                                        <p className='span-menu-titulo'>Mimos</p>
                                        <p>Quem é earth tem descontos exclusivos para aproveitar.</p>
                                        <Link to={'/temaearth'} className="menu-item"><a className="menu-item">Conhecer</a></Link>                                       
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className='caixa_menu'>
                                    <span className='span-text'>
                                        <p className='span-menu-titulo'>Investimentos</p>
                                        <p>Investimentos que combinam com todos os tipos de perfil.</p>
                                        <Link to={'/temaearth'} className="menu-item"><a className="menu-item">Conhecer</a></Link>                                      
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className='caixa_menu'>
                                    <span className='span-text'>
                                        <p className='span-menu-titulo'>Empréstimos</p>
                                        <p>Crédito com a opção de contratar direto pelo app.</p>
                                        <Link to={'/temaearth'} className="menu-item"><a className="menu-item">Conhecer</a></Link>                                      
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className='caixa_menu'>
                                    <span className='span-text'>
                                        <p className='span-menu-titulo'>Seguros</p>
                                        <p>Seguros para proteger o que conquistou e cuidar do seu bem-estar.</p>
                                        <Link to={'/temaearth'} className="menu-item"><a className="menu-item">Conhecer</a></Link>                                       
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className='caixa_menu'>
                                    <span className='span-text'>
                                        <p className='span-menu-titulo'>Pix</p>
                                        <p>Um novo jeito de fazer pagamentos e transferências.</p>
                                        <Link to={'/temaearth'} className="menu-item"><a className="menu-item">Conhecer</a></Link>                                     
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className='caixa_menu'>
                                    <span className='span-text'>
                                        <p className='span-menu-titulo'>Whatsapp</p>
                                        <p>Mais um jeito rápido, seguro e prático de pagar com o earth.</p>
                                        <Link to={'/temaearth'} className="menu-item"><a className="menu-item">Conhecer</a></Link>                                        
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className='caixa_menu'>
                                    <span className='span-text'>
                                        <p className='span-menu-titulo'>Indique amigos</p>
                                        <p>Chame seus amigos para abrir conta no earth.</p>
                                        <Link to={'/temaearth'} className="menu-item"><a className="menu-item">Conhecer</a></Link>                                        
                                    </span>
                                </div>
                            </li>
                        </ul>

                    </div>
                    <div className='colun2'>
                        <ul>
                            <li>
                                <div className='caixa_menu'>
                                    <span className='span-text'>
                                        <p className='span-menu-titulo'>Open Finance</p>
                                        <p>Mais poder pra você fazer acontecer.</p>
                                        <Link to={'/openfinance'} className="menu-item"><a className="menu-item">Conhecer</a></Link>                                        
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className='caixa_menu'>
                                    <span className='span-text'>
                                        <p className='span-menu-titulo'>Sobre nós</p>
                                        <p>O banco 100% digital que veio pra ajudar a fazer os planos acontecerem.</p>
                                        <Link to={'/sobrenos'} className="menu-item"><a className="menu-item">Conhecer</a></Link>                                      
                                    </span>
                                </div>                        
                            </li> 
                            <li>
                                <div className='caixa_menu'>
                                    <span className='span-text'>
                                        <p className='span-menu-titulo'>Carreiras</p>
                                        <p>Venha fazer parte do time que faz acontecer.</p>
                                        <Link to={'/temaearth'} className="menu-item"><a className="menu-item">Conhecer</a></Link>                                         
                                    </span>
                                </div>                        
                            </li>
                        </ul>

                    </div>                    
                </div>
                        <div className='barra-menu'>
                            <h1>1</h1>
                        </div>                
            </div>
           
          </Menu>
        );
    }
}
 
export default CustomMenu;
