import { useEffect, useState } from 'react';
import '../../assets/css/header.css'
import logo from '../../assets/img/earth bank.png'
import CustomMenu from '../menu/CustomMenu';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


export const Header = (props) => {
    const [scroll, setScroll] = useState(false);
        useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 150);
        });
        }, []);

    const goTop = () =>{
        window.scrollTo(0, 0)
    }

    const[isHovering_0, setIsHoverring_0] = useState(false);
    const[isHovering_1, setIsHoverring_1] = useState(false);
    const[isHovering_2, setIsHoverring_2] = useState(false);

    const handleMouseOver = (props) => {
        if (props == 1){
            setIsHoverring_1(true);
            console.log(props)
        };
        if(props == 2){
            setIsHoverring_2(true); 
        };
        if(props == 0){
            setIsHoverring_0(true); 
        };

           
    };

    const handleMouseOut = (props) => {
        if (props == 1){
            setIsHoverring_1(false);
        };
        if(props == 2){
          setIsHoverring_2(false);  
        };
        if(props == 0){
            setIsHoverring_0(false);  
          };
        
    };

    return (
        <div className={scroll ? "header_home menu_compacto" : "header_home"}>
            <div className='container-left'>
                <div className={scroll ? "logo_aparecer" : "Logo"}>
                    <a onClick={goTop}><img className='Logo' src={logo} alt="Connect-Banco-Digital logo" id='navbarearth' ></img></a>
                   
                </div>
                <p className={scroll ? "Text Text_aparecer" : "Text"}>
                    Earth | {props.pagina}</p>
                <div className={scroll ? "Menu esconder_menu" : "Menu"}>
                    
                    <div className='menu-button-aparecer'
                                onMouseOver={() => handleMouseOver(1)}
                                onMouseOut={() => handleMouseOut (1)}>
                        <a className='button_normal' >Conta</a>
                        <span  className={isHovering_1 ? 'menu-button-conta' : 'menu-escondido'}>
                            <ul className={isHovering_1 ? 'menu-button' : 'menu-escondido-button'}>
                                <Link to="/contaearth" className='a-menu'>
                                <a  className='a-menu' href="https://www.coca-cola.com.br/">
                                    <li className='button-conteudo' ><p>Conta Earth</p>
                                    </li>
                                </a>
                                </Link>

                                <hr />
                                <a  className='a-menu' href="">
                                    <Link to={'/login'} className='a-menu'> <li className='button-conteudo'><p>Login</p></li></Link>                                    
                                </a>

                            </ul>
                        </span>
                    </div>
                    <div className='menu-button-aparecer'
                                onMouseOver={() =>handleMouseOver(2)}
                                onMouseOut={() => handleMouseOut(2)}>
                        <a className='button_normal' >Tem No Earth</a>
                        <span className={isHovering_2 ? 'menu-button-earth' : 'menu_escondido'}>
                            <ul>
                                <a  className='a-menu' href="">
                                    <Link to={'/temearth'} className='button_normal'><a className='button-conteudo-2'>Cartões earth</a></Link>
                                </a>
                                <hr />
                                <a  className='a-menu' href="">
                                    <Link to={'/temearth'} className='button_normal'><a className='button-conteudo-2'>Investimentos</a></Link>                                  
                                </a>
                                <hr />
                                <a  className='a-menu' href="">
                                    <Link to={'/temearth'} className='button_normal'><a className='button-conteudo-2'>Empréstimos</a></Link>                                   
                                </a> 
                                <hr />  
                                <a  className='a-menu' href="">
                                    <Link to={'/temearth'} className='button_normal'><a className='button-conteudo-2'>Seguros</a></Link>                                   
                                </a> 
                                <hr />  
                                <a  className='a-menu'  href="">
                                    <Link to={'/temearth'} className='button_normal'><a className='button-conteudo-2'>Pix</a></Link>                                  
                                </a> 
                                <hr />  
                                <a  className='a-menu' href="">
                                    <Link to={'/temearth'} className='button_normal'><a className='button-conteudo-2'>Whatsapp</a></Link>                                 
                                </a>  
                                <hr /> 
                                <a  className='a-menu' href="">
                                    <Link to={'/temearth'} className='button_normal'><a className='button-conteudo-2'>Indique amigos</a></Link>                                 
                                </a>                       
                            </ul>
                        </span>
                    </div>
                    <div className='menu-button-aparecer'
                                onMouseOver={() =>handleMouseOver(0)}
                                onMouseOut={() => handleMouseOut(0)}>
                        <a className='button_normal' >Ajuda</a>
                        <span className={isHovering_0 ? 'menu-button-ajuda' : 'menu_escondido'}>
                            <ul>
                                <a  className='a-menu' href="">
                                    <Link to={'/duvidas'} className='button_normal'><a className='button-conteudo-3'>Duvidas</a></Link>                                 
                                </a>  
                                <hr /> 
                                <a  className='a-menu' href="">
                                    <Link to={'/contato'} className='button_normal'><a className='button-conteudo-3'>Contatos</a></Link>                                  
                                </a>  
                            </ul>
                        </span>
                    </div>
                    <a  className='a-menu' href="">
                        <Link to={'/openfinance'} className='button_normal'><a>Open Finance</a></Link>                                         
                    </a>
                    <a  className='a-menu' href="">
                        <Link to={'/sobrenos'} className='button_normal'><a>Sobre Nós</a></Link>                                         
                    </a>
                </div>
            </div>
            <div className='menu'>
                <div className={scroll ? "Menu_react Menu_aparecer" : "Menu_react"}>
                    <CustomMenu />
                </div>
                <HashLink smooth to={'/home#cadastro'} className='button_home'><a  className='button_home'>Quero Ser Earth</a></HashLink>
            </div>
            
        </div>
    )
}