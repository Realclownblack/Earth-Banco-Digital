import React, { Component } from 'react';
import { fallDown as Menu } from 'react-burger-menu'

import google_play from '../../assets/img/google-play.svg'
import app_store from '../../assets/img/app-store.svg'
import facebook from '../../assets/img/facebook.png'
import instragram from '../../assets/img/instagram.png'
import whatsapp from '../../assets/img/whatsapp.png'
import youtube from '../../assets/img/youtube.png'

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
                <div className='colun1'>
                    <div className='conta'>
                        <p>Account</p>
                        <a id="Account" className="menu-item" href="/">Account</a>
                    </div>
                    <div className='temearth'>
                        <p>Have on Earth</p>
                        <a id="Have_on_Earth" className="menu-item" href="/about">Have on Earth</a>
                    </div>
                    <div className='emprestimos'>
                        <p>Loans</p>
                        <a id="Loans" className="menu-item" href="/contact">Loans</a>
                    </div>
                </div>
               <div className='colun2'>
                    <div className='open'>
                        <p>Open Finance</p>
                        <a id="Open_Finance" className="menu-item" href="/contact">Open Finance</a>
                    </div>
                    <div className='ajuda'>
                        <p>Help</p>
                        <a id="Help" className="menu-item" href="/contact">Help</a>
                    </div>
                    <div className='sobre'>
                        <p>About Us</p>
                        <a id="About Us" className="menu-item" href="/contact">About Us</a>
                    </div>
               </div>
                

            </div>
           
            <div className='Barra_direita'>
                <div className='Barra_dentro'>
                    <p>Ajuda</p>
                    <a className='button' href="Dúvidas">Dúvida</a>
                    <br />
                    <a className='button' href="Contato">Contato</a>
                <p>Central de relacionamento <br />
                    0800 275 6398</p>
                <p>SAC <br />
                    0800 722 6398</p>
                <p>falaearth@gmail.com</p>
                <p className='Siga'>Siga Earth</p>
                <div className='redes'>
                    <img className='redes_logo' src={facebook} alt="facebook" />
                    <img className='redes_logo' src={instragram} alt="instragram" />
                    <img className='redes_logo' src={youtube} alt="youtube" />
                    <img className='redes_logo' src={whatsapp} alt="whatsapp" />
                </div>

                </div>
                
            </div>
            <div className='Barra_direta1'>
                <p className='Text_store'>BAIXE O SEU APLICATIVO E ABRA SUA CONTA:</p>
                <div className='store_logo'>
                <img className='Logo_store' src={google_play} alt="Connect-Banco-Digital logo"></img>
                <img className='Logo_store' src={app_store} alt="Connect-Banco-Digital logo"></img>
                </div>
            </div>
          </Menu>
        );
    }
}
 
export default CustomMenu;
