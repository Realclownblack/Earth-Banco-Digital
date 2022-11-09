import '../../../assets/css/cssStatic/Vantagens_openfinance.css'
import carrinho from '../../../assets/img/carrinho-carrinho.png'
import atonomia  from '../../../assets/img/motivacao.png'
import segurança from '../../../assets/img/escudo-de-seguranca.png'

export const Vantagens_openfinance = () =>{
    return(
        <div className='Vantagens_openfinance-div'>
            <div className='Vantagens_openfinance-div_titulo'>Quais são as vantagens do Open Finance?</div>
            <div className='Vantagens_openfinance-div_2'>
                <div className='Vantagens_openfinance_1'>
                    <img className='img-openfinace-vantagens' src={carrinho} alt="" />
                    <p className='Vantagens_openfinance-titulo'>
                    FACILIDADE
                    </p>
                    <span className='Vantagens_openfinance-text'>
                    Com o Open Finance, você pode ter mais controle sobre sua vida financeira ao gerenciar contas bancárias e gastos em um só lugar.
                    </span>
                </div>
                <div className='Vantagens_openfinance_2'>
                    <img className='img-openfinace-vantagens' src={segurança} alt="" />
                    <p className='Vantagens_openfinance-titulo'>
                    SEGURANÇA
                    </p>
                    <span className='Vantagens_openfinance-text'>
                    Você é o dono dos seus dados. O compartilhamento de dados é feito por meio do nosso app apenas se você pedir e autorizar.
                    </span>
                </div>
                <div className='Vantagens_openfinance_3'>
                    <img className='img-openfinace-vantagens' src={atonomia} alt="" />
                    <p className='Vantagens_openfinance-titulo-2'>
                    AUTONOMIA
                    </p>
                    <span className='Vantagens_openfinance-text-2'>
                    Você decide com quem, como e quando compartilhará seus dados, podendo cancelar essa autorização depois, se quiser.
                    </span>
                </div>
            </div>
        </div>
    )
}