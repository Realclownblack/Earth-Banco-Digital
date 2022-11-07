import React, { Component } from 'react';
import { Header } from '../components/header/Header'
import {Footer} from '../components/footer/Footer'
import { Earthpoupa_info } from '../components/componentsStatic/earthpoupa/Earthpoupa_info'


class EarthPoupa extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Header pagina='Poupar Dinheiro Nunca Ficou Tão Facil'/>
            <Earthpoupa_info/>
            <Footer/>
            </>
        );
    }
}
 
export default EarthPoupa;