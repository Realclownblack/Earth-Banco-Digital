import '../../../assets/css/cssStatic/saques_ilimitados.css'

import img_mulher from '../../../assets/img/saques-desk.png'

export const SaquesIlimitados = () => {
    return(
        <div className=' Saquesilimitados-div'>
            <div className=' Saquesilimitados-text'>
                <div id='text-1'><p>Saque quantas vezes quiser</p></div>
                <div  id='text-2'>Tá sem dinheiro na carteira pra pagar? Com next você resolve rapidinho! É só achar o caixa eletrônico do Bradesco ou da Rede Banco24Horas que estiver mais perto e sacar. E o melhor: o serviço é gratuito e ilimitado.</div>
                <div  id='text-3'>Caixas eletrônicos em todo o Brasil</div>
                <a id='button-saques-mapa' href="">VEJA NO MAPA</a>
            </div>
            <div className=' Saquesilimitados-img'>
                <img className='img-saques' src={img_mulher} alt="" />
            </div>
        </div>
    
    )
}