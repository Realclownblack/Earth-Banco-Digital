import { useEffect, useState } from 'react';
import logo from '../../assets/img/earth bank.png'
import CustomMenu from '../menu/CustomMenu';
import { Link } from 'react-router-dom';

export const Header = (props) => {
    const [scroll, setScroll] = useState(false);
        useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 150);
        });
        }, []);

    return (
        <div className={scroll ? "header_home menu_compacto" : "header_home"}>
            <div className='container-left'>
                <div className={scroll ? "logo_aparecer" : "Logo"}>
                   <img className='Logo' src={logo} alt="Connect-Banco-Digital logo"></img>
                </div>
                <p className={scroll ? "Text Text_aparecer" : "Text"}>
                    Earth | {props.pagina}</p>
                <ul className={scroll ? "Menu esconder_menu" : "Menu"}>
                    <li id='1'>Conta</li>
                    <li id='2'>Tem No Earth</li>
                    <li id='3'>Earth Poupa</li>
                    <li id='4'>Open Finance</li>
                    <li id='5'>Sobre Nós</li>
                    <li id='6'>Ajuda</li>
                </ul>
            </div>
            <div className='Menu'>
                <div className={scroll ? "Menu_react Menu_aparecer" : "Menu_react"}>
                    <CustomMenu />
                </div>
                <button className='button_home' ><Link to="/cadastro">Quero Ser Earth</Link></button>
            </div>
            
        </div>
    )
}