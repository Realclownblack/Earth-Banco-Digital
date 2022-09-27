import React, { Component } from 'react';
import { Header } from '../components/header/Header'
import {Footer} from '../components/footer/Footer'
import { Cadastro_banco } from '../components/cadastro/Cadastro_banco'

class Cadastro extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Header pagina='Vem Fazer Parte Do Maior Banco Digital Do Brasil'/>
            <Cadastro_banco/>
            <Footer/>
            </>
        );
    }
}
 
export default Cadastro;