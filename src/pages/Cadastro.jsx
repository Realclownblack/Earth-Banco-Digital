import React, { Component } from 'react';
import { Header_pages } from '../components/header_pages/Header_pages'
import { Footer} from '../components/footer/Footer'
import { Usercadastro } from '../components/cadastro/UserCadastro'
class Cadastro extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Header_pages pagina='Vem Fazer Parte Do Maior Banco Digital Do Brasil'/>
            <Usercadastro/>
            <Footer/>
            </>
        );
    }
}
 
export default Cadastro;