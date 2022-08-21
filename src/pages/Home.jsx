import React, { Component } from 'react';
import '../assets/css/header.css'
import '../assets/css/CustomMenu.css'
import { Navbar } from '../components/navbar/Navbar'
import { Header } from '../components/header/Header'

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Header />
            <Navbar />  
            </>
        );
    }
}
 
export default Home;