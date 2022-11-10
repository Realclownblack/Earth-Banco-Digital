import '../../../assets/css/cssStatic/Openfinance_diferencias.css'
import OPENFIMNCE from '../../../assets/img/openfinance_logo-img.png'

export const Openfinance_diferencias = () =>{
    return(
        <div className='Openfinance_diferencias-div'>
            <div className='Openfinance_diferencias-div-1'>
                <div id='Openfinance_diferencias-div-organizar'>
                    <span id='Openfinance_diferencias-titulo'><p id='Openfinance_diferentes-titulo-p'>Open Finance</p> <p id='Openfinance_diferentes-titulo-p'>x Open Banking:</p>  qual a diferença?</span>
                    <span id='Openfinance_diferencias-span'>Open Banking é um sistema que torna possível ao consumidor compartilhar seus dados cadastrais e informações financeiras com diversas instituições – por exemplo: movimentações da conta, limites de crédito, saldos, entre outros.</span>
                    <span id='Openfinance_diferencias-span'>Já o Open Finance é uma evolução do Open Banking: ele permite o compartilhamento de informações não somente bancárias, mas também de produtos financeiros, como seguros, investimentos, câmbio e mais.</span>                    
                </div>
            </div>
            <div className='Openfinance_diferencias-div-2'><img className='OPENFIMNCE-img' src={OPENFIMNCE} alt="" /></div>
        </div>
    )
}