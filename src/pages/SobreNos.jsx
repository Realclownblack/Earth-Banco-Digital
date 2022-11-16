import React, { Component } from 'react';
import { Header } from '../components/header/Header'
import {Footer} from '../components/footer/Footer'
import { Sobre } from '../components/componentsStatic/sobre/Sobre'
import {Ajuda_duvida} from '../components/ajuda/Ajuda_duvida'
import { Usercadastro } from '../components/cadastro/UserCadastro'



class SobreNos extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Header pagina='Banco Digital Feito Para Pobre'/>
            <Sobre/>
            <Ajuda_duvida/>
            <Usercadastro/>
            <Footer/>
            </>
        );
    }
}
 
export default SobreNos;