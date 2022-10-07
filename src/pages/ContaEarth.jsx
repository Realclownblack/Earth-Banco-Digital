import { Component } from 'react';
import { Header } from '../components/header/Header'
import {Footer} from '../components/footer/Footer'
import { NavbarContaEarth } from '.././components/navbar/NavbarContaEarth'
import {SaquesIlimitados} from '../components/componentsStatic/saquesIlimitados/SaquesIlimitados'



class ContaEarth extends Component {
    state = {}
    render() {
        return(
            <>
            <Header pagina={'Conta gratuita Facil De abrir'}/>
            <NavbarContaEarth/>
            <SaquesIlimitados/>
            <Footer/>
            </>
        );
    }
}

export default ContaEarth;