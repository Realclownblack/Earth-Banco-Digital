import React, { Component } from 'react';
import { Header } from '../components/header/Header'
import {Footer} from '../components/footer/Footer'


class About extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Header pagina='Banco digital que faz acontecer'/>
            <Footer/>
            </>
        );
    }
}
 
export default About;