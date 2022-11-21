import React, { Component } from 'react';
import { Header } from '../components/header/Header'
import {Footer} from '../components/footer/Footer'
import { TemearthBox } from '../components/temearth/TemearthBox'


class TemEarth extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Header pagina='Beneficios Para Todos'/>
            <TemearthBox/>
            <Footer/>
            </>
        );
    }
}
 
export default TemEarth;