import '../../../assets/css/cssStatic/Openfinance_info.css'
import mascote from '../../../assets/img/earth bank preto.png'

export const Openfinance_info = () =>{
    return(
        <div className='Openfinance_info-div'>
            <div className='Openfinance_info-div_2'>
                <div className='Openfinance_info-div_primaria'>
                    <span className='Openfinance-span'>
                        <p id='open-titulo'>Open Finance</p>
                        <p id='open-titulo-2'>Mais poder pra fazer acontecer</p>
                        <span id='open-text'>O sistema financeiro aberto, seguro e gratuito que chegou no Earth pra te dar ainda mais autonomia.</span>                          
                    </span>
                </div>
                <div className='Openfinance_info-div_segundaria'>
                    <img id='mascote-openfinace' src={mascote} alt="" />
                </div>

            </div>
        </div>
    )
}