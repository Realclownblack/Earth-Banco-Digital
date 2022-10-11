import React, { Component } from 'react';
import { Header } from '../components/header/Header'
import {Footer} from '../components/footer/Footer'


class Contato extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Header pagina='O Banco Digital Earth Esta A sua Disposição'/>
            <Footer/>
            </>
        );
    }
}
 
export default Contato;