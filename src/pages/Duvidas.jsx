import React, { Component } from 'react';
import { Header } from '../components/header/Header'
import {Footer} from '../components/footer/Footer'
import { Duvidas_client } from '../components/ajuda/Duvidas_client'


class Duvidas extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Header pagina='Vem Fazer Parte Do Maior Banco Digital Do Brasil'/>
            <Duvidas_client/>
            <Footer/>
            </>
        );
    }
}
 
export default Duvidas;