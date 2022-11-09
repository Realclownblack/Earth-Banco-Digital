import React, { Component } from 'react';
import { Header } from '../components/header/Header'
import {Footer} from '../components/footer/Footer'
import { Earthpoupa_info } from '../components/componentsStatic/earthpoupa/Earthpoupa_info'
import { Earthpoupa_info_2 } from '../components/componentsStatic/earthpoupa/Earthpoupa_info _2'
import { Usercadastro } from '../components/cadastro/UserCadastro'
import { Earthpoupa_info_ico } from '../components/componentsStatic/earthpoupa/Earthpoupa_info _ico'
import {Ajuda_duvida} from '../components/ajuda/Ajuda_duvida'


class EarthPoupa extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Header pagina='Poupar Dinheiro Nunca Ficou Tão Facil'/>
            <Earthpoupa_info_ico/>
            <Earthpoupa_info/>
            <Earthpoupa_info_2/>
            <Ajuda_duvida/>
            <Usercadastro/>
            <Footer/>
            </>
        );
    }
}
 
export default EarthPoupa;