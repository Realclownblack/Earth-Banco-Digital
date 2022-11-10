import React, { Component } from 'react';
import { Header } from '../components/header/Header'
import {Footer} from '../components/footer/Footer'
import {Ajuda_duvida} from '../components/ajuda/Ajuda_duvida'
import { Usercadastro } from '../components/cadastro/UserCadastro'
import { Openfinance_info } from '../components/componentsStatic/openfinance/Openfinance_info'
import { Vantagens_openfinance } from '../components/componentsStatic/openfinance/Vantagens_openfinance'
import { Openfinance_diferencias } from '../components/componentsStatic/openfinance/Openfinance_diferencias'

class OpenFinance extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Header pagina='Open Finance '/>
            <Openfinance_info/>
            <Openfinance_diferencias/>
            <Vantagens_openfinance/>
            <Ajuda_duvida/>
            <Usercadastro/>
            <Footer/>
            </>
        );
    }
}
 
export default OpenFinance;