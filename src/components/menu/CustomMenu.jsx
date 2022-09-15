import React, { Component } from 'react';
import { fallDown as Menu } from 'react-burger-menu'


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
                        <hr />
                        <p className='text_tem'>Tem no Earth</p>
                    </div>                
                <div className='colunas'>
                    
                    <div className='colun1'>
                        <ul>
                            <li>
                                <div className='caixa_menu'>
                                    <span>
                                        <p>Account</p>
                                        <p>Cartões sem anuidade, pagamentos digitais e mimos exclusivos.</p>
                                        <a id="Account" className="menu-item" href="/">Account</a>
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className='caixa_menu'>
                                    <span>
                                        <p>Have on Earth</p>
                                        <a id="Have_on_Earth" className="menu-item" href="/about">Have on Earth</a>                                        
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className='caixa_menu'>
                                    <span>
                                        <p>Loans</p>
                                        <a id="Loans" className="menu-item" href="/contact">Loans</a>                                        
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className='caixa_menu'>
                                    <span>
                                        <p>Loans</p>
                                        <a id="Loans" className="menu-item" href="/contact">Loans</a>                                        
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className='caixa_menu'>
                                    <span>
                                        <p>Loans</p>
                                        <a id="Loans" className="menu-item" href="/contact">Loans</a>                                        
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className='caixa_menu'>
                                    <span>
                                        <p>Loans</p>
                                        <a id="Loans" className="menu-item" href="/contact">Loans</a>                                        
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className='caixa_menu'>
                                    <span>
                                        <p>Loans</p>
                                        <a id="Loans" className="menu-item" href="/contact">Loans</a>                                        
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className='caixa_menu'>
                                    <span>
                                        <p>Loans</p>
                                        <a id="Loans" className="menu-item" href="/contact">Loans</a>                                        
                                    </span>
                                </div>
                            </li>
                        </ul>

                    </div>
                <div className='colun2'>
                        <ul>
                            <li>
                                <div className='caixa_menu'>
                                    <span>
                                        <p>Open Finance</p>
                                        <a id="Open_Finance" className="menu-item" href="/contact">Open Finance</a>                                        
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className='caixa_menu'>
                                    <span>
                                        <p>Help</p>
                                        <a id="Help" className="menu-item" href="/contact">Help</a>                                        
                                    </span>
                                </div>                        
                            </li> 
                            <li>
                                <div className='caixa_menu'>
                                    <span>
                                        <p>About Us</p>
                                        <p>O banco 100% digital que veio pra ajudar a fazer os planos acontecerem.</p>
                                        <a id="About Us" className="menu-item" href="/contact">About Us</a>                                        
                                    </span>
                                </div>                        
                            </li>
                            <li>
                                <div className='caixa_menu'>
                                    <span>
                                        <p>Loans</p>
                                        <a id="Loans" className="menu-item" href="/contact">Loans</a>                                        
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className='caixa_menu'>
                                    <span>
                                        <p>Loans</p>
                                        <a id="Loans" className="menu-item" href="/contact">Loans</a>                                        
                                    </span>
                                </div>
                            </li>  
                        </ul>
                </div>                    
                </div>

                

            </div>
           
          </Menu>
        );
    }
}
 
export default CustomMenu;
