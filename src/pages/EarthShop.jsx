import React, { Component } from 'react';
import { Header } from '../components/header/Header'
import {Footer} from '../components/footer/Footer'


class EarthShop extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Header pagina='Compre sem sair de casa'/>
            <Footer/>
            </>
        );
    }
}
 
export default EarthShop;