import React, { Component } from 'react';
import '../assets/css/header.css'
import '../assets/css/CustomMenu.css'
import { Header } from '../components/header/Header'
import { Footer} from '../components/footer/Footer'


class Cadastro extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Header pagina='Vem Fazer Parte Do Maior Banco Digital Do Brasil'/>
            <Footer/>
            </>
        );
    }
}
 
export default Cadastro;