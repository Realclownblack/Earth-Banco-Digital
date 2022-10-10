import { Component } from 'react';
import { Header } from '../components/header/Header'
import {Footer} from '../components/footer/Footer'
import { NavbarContaEarth } from '.././components/navbar/NavbarContaEarth'
import {SaquesIlimitados} from '../components/componentsStatic/saquesIlimitados/SaquesIlimitados'
import { Usercadastro } from '../components/cadastro/UserCadastro'
import { PagamentosDigitais } from '../components/componentsStatic/pagamentosDigitais/PagamentosDigitais'



class ContaEarth extends Component {
    state = {}
    render() {
        return(
            <>
            <Header pagina={'Conta gratuita Facil De abrir'}/>
            <NavbarContaEarth/>
            <SaquesIlimitados/>
            <PagamentosDigitais/>
            <Usercadastro/>
            <Footer/>
            </>
        );
    }
}

export default ContaEarth;