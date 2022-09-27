import { Component } from 'react';
import { Header } from '../components/header/Header'
import {Footer} from '../components/footer/Footer'
import { UserLogin } from '../components/login/UserLogin'

class Login extends Component {
    state = {}
    render() {
        return(
            <>
            <Header pagina={'Facilidade na hora pagar suas contas'}/>
            <UserLogin/>
            <Footer/>
            </>
        );
    }
}

export default Login;