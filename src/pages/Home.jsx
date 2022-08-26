import React, { Component } from 'react';
import '../assets/css/CustomMenu.css'
import { Navbar } from '../components/navbar/Navbar'
import { Header } from '../components/header/Header'
import {Footer} from '../components/footer/Footer'
import { Usercadastro } from '../components/cadastro/UserCadastro'
import {Vantagens} from '../components/vantagens/Vantagens'
import {Parceiros} from '../components/parceiros/Parceiros'
class Home extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Header pagina='Banco digital que faz acontecer'/>
            <Navbar/>
            <Vantagens/>
            <Parceiros/>
            <Usercadastro/>
            <Footer/>
            </>
        );
    }
}
 
export default Home;