import { useEffect, useState } from 'react';
import '../../assets/css/header.css'
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

    const[isHovering, setIsHoverring] = useState(false);
    const[isHovering_1, setIsHoverring_1] = useState(false);

    const handleMouseOver = (props) => {
        if (props == 1){
            setIsHoverring_1(true);
            console.log(props)
        };
        if(props == 2){
            setIsHoverring(true); 
        };
           
    
    };

    const handleMouseOut = (props) => {
        if (props == 1){
            setIsHoverring_1(false);
        };
        if(props == 2){
          setIsHoverring(false);  
        };
        
        
    };

    return (
        <div className={scroll ? "header_home menu_compacto" : "header_home"}>
            <div className='container-left'>
                <div className={scroll ? "logo_aparecer" : "Logo"}>
                    <Link to="/"><img className='Logo' src={logo} alt="Connect-Banco-Digital logo"></img></Link>
                   
                </div>
                <p className={scroll ? "Text Text_aparecer" : "Text"}>
                    Earth | {props.pagina}</p>
                <div className={scroll ? "Menu esconder_menu" : "Menu"}>
                    
                    <div className='menu-button-aparecer'
                                onMouseOver={() => handleMouseOver(1)}
                                onMouseOut={() => handleMouseOut (1)}>
                        <a className='button_normal' >Conta</a>
                        <span  className={isHovering_1 ? 'menu-button-conta' : 'menu-escondido-conta'}>
                      
                        </span>
                    </div>
                    <a className='button_normal' >Earth Poupa</a>
                    <div className='menu-button-aparecer'
                                onMouseOver={() =>handleMouseOver(2)}
                                onMouseOut={() => handleMouseOut(2)}>
                        <a className='button_normal' >Tem No Earth</a>
                        <span className={isHovering ? 'menu-button' : 'menu_escondido'}>

                        </span>
                    </div>
                    <li id='4'>Open Finance</li>
                    <li id='5'>Sobre Nós</li>
                    <li id='6'>Ajuda</li>
                </div>
            </div>
            <div className='menu'>
                <div className={scroll ? "Menu_react Menu_aparecer" : "Menu_react"}>
                    <CustomMenu />
                </div>
                <a className='button_home' href="#cadastro" >Quero Ser Earth</a>
            </div>
            
        </div>
    )
}