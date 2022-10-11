import '../../../assets/css/cssStatic/MuitoMais.css'
import Mascote from '../../../assets/img/Mascote.png'
export const MuitoMais = () => {
    return(
        <div className='MuitoMais-div'>
            <div  className='MuitoMais-div-img'>
                <img src={Mascote} alt="" className='img-mascote'/>
            </div>
            <div  className='MuitoMais-div-text'>
                <p id='Text-titulo-muitoMais'>E muito mais:</p>
                <p id='Text-titulo-muitoMais-segundario'>Depósito imediato e sem envelope</p>
                <hr />
                <p id='Text-titulo-muitoMais-segundario'>Recargas de celular</p>
                <hr />
                <p id='Text-titulo-muitoMais-segundario'>Pagamentos de contas e boletos pelo app</p>
                <hr />
                <p id='Text-titulo-muitoMais-segundario'>Comprovantes e extratos ilimitados</p>
                <hr />
                <p id='Text-titulo-muitoMais-segundario'>Compra de moeda estrangeira direto nos caixas Bradesco</p>
            </div>
        </div>
    
    )
}