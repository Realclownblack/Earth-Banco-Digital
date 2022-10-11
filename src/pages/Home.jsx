import React, { Component } from 'react';
import '../assets/css/CustomMenu.css'
import { Navbar } from '../components/navbar/Navbar'
import { Header } from '../components/header/Header'
import {Footer} from '../components/footer/Footer'
import { Usercadastro } from '../components/cadastro/UserCadastro'
import {Vantagens} from '../components/vantagens/Vantagens'
import {Parceiros} from '../components/parceiros/Parceiros'
import { Contaearth } from '../components/contaearth/Contaearth'
import {Ajuda_duvida} from '../components/ajuda/Ajuda_duvida'
import { ContasCadastradas } from '../components/contasCadastradas/ContasCadastradas'

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Header pagina='Banco digital que faz acontecer'/>
            <Navbar/>
            <Vantagens/>
            <Contaearth/>
            <Parceiros/>
            <ContasCadastradas/>
            <Ajuda_duvida/>
            <Usercadastro/>
            <Footer/>
            </>
        );
    }
}
 
export default Home;