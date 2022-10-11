import '../../assets/css/ContasCadastradas.css'
import CountUp from 'react-countup';
import img from '../../assets/img/Vectary texture (6).png'

export const ContasCadastradas = () => {
    return(
        <div className='ContasCadastradas-div'>
            <img id='ContasCadastradas-img' src={img} alt="" />
            <div className='ContasCadastradas-div-conte'>
                <p id='ContasCadastradas-titulo'>Quantas Contas abertas no Earth </p>
                <div className='ContasCadastradas-calculo'> <CountUp 
                end={54284490012}
                duration={6}
                separator={'.'}
                /> </div>
                <p id='ContasCadastradas-segundario'>Quer ser Earth também faça parte E ganhe milhares de beneficio</p>
                <button className='ContasCadastradas-button'>Abrir Uma Conta</button>
            </div>
            
        </div>
    
    )
}