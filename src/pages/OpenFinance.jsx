import React, { Component } from 'react';
import { Header } from '../components/header/Header'
import {Footer} from '../components/footer/Footer'


class OpenFinance extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Header pagina='Open Finance '/>
            <Footer/>
            </>
        );
    }
}
 
export default OpenFinance;