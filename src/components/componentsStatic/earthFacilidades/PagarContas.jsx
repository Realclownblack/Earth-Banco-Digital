import '../../../assets/css/cssStatic/pagarcontas.css'
import curva_5 from '../../../assets/img/curva-5.png'

export const PagarContas = () =>{
    return(
        <div className='PagarConta-div'>
            <div className='PagarContas-img'><img src={curva_5} alt="" /></div>
            <div className='PagarConta-text'>
                <p id='title-text'>Earth Facilita</p>
                <p>Pagar Suas Contas No Earth Pelo Site</p>
                <p>20% De CashBack Em Lojas Parceiras</p>
                <p>Não espere em filas Pague Seus Boletos Aqui Pelo Site</p>
                <p>Earth banco dfe gente feliz</p>
            </div>
        </div>
    )
}