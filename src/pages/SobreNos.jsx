import React, { Component } from 'react';
import { Header } from '../components/header/Header'
import {Footer} from '../components/footer/Footer'


class SobreNos extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Header pagina='Banco Digital Feito Para Pobre'/>
            <Footer/>
            </>
        );
    }
}
 
export default SobreNos;