import React, { Component } from 'react';
import { Header } from '../components/header/Header'
import {Footer} from '../components/footer/Footer'
import { Contato_earth } from '../components/componentsStatic/contato/Contato_earth'


class Contato extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Header pagina='O Banco Digital Earth Esta A sua Disposição'/>
            <Contato_earth/>
            <Footer/>
            </>
        );
    }
}
 
export default Contato;