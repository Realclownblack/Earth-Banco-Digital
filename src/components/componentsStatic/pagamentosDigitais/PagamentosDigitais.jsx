import '../../../assets/css/cssStatic/PagamentosDigitais.css'
import logo_pagamento from '../../../assets/img/whatsapp.png'
import logo_pay from '../../../assets/img/pay.png'
import logo_googlepay from '../../../assets/img/googlepay.png'
import logo_samsungpay from '../../../assets/img/samsungpay.png'
import logo_carataoearthPreto from '../../../assets/img/carataoearthPreto.png'
import logo_carataoearth from '../../../assets/img/carataoearth.png'
import logo_qrcode from '../../../assets/img/qrcode.png'
import logo_whastsappLogo from '../../../assets/img/whastsappLogo.png'
import logo_aprocimacao from '../../../assets/img/aprocimacao.jfif'



export const PagamentosDigitais = () => {
    return(
        <div className='PagamentosDigitais-div'>
            <div className='PagamentosDigitais-text'>
                <p id='text-pagamentos-digitais-centro'>Pagamentos Digitais</p>
                <p id='text-pagamentos-digitais-primario'>Com segurança para pagar tudo pelo celular</p>
                <p id='text-pagamentos-digitais-centro'>Quem é earth tem tudo na palma da mão a forma rapida e segura de pagar as compras</p>
            </div>
            <div className='PagamentosDigitais-caixa-digitais'>
                <div className='PagamentosDigitais-cubo'>
                    <div className='PagamentosDigitais-img-logo'>
                        <img className='PagamentosDigitais-logos' src={logo_pay} alt="" />
                        <p id='text-titulo-pagamentos-digitais'>Apple Pay</p>
                    </div>
                    <div className='PagamentosDigitais-text-info'>Dá pra adicionar seu cartão de débito ou crédito no Apple Pay direto no app do next e já começar a pagar tudo online e por aproximação.</div>
                    <a href="" className='PagamentosDigitais-saibaMais'>SAIBA MAIS</a>
                </div>
                <div className='PagamentosDigitais-cubo'>
                    <div className='PagamentosDigitais-img-logo'>
                    <img className='PagamentosDigitais-logo-google' src={logo_googlepay} alt="" />
                        <p id='text-titulo-pagamentos-digitais'>Google Pay</p>
                    </div>
                    <div className='PagamentosDigitais-text-info'>Quer pagar as compras online e por aproximação? Basta ativar o pagamento via Google Pay no seu app next e pronto!Vale para crédito e débito.</div>
                    <a href="" className='PagamentosDigitais-saibaMais'>SAIBA MAIS</a>
                </div>
                <div className='PagamentosDigitais-cubo'>
                    <div className='PagamentosDigitais-img-logo'>
                    <img className='PagamentosDigitais-logos-samsung' src={logo_samsungpay} alt="" />
                        <p id='text-titulo-pagamentos-digitais'>Samsung Pay</p>
                    </div>
                    <div className='PagamentosDigitais-text-info'>Tem celular ou smartwatch da Samsung? Adicione o seu cartão next na Samsung Pay para pagar por aproximação.</div>
                    <a href="" className='PagamentosDigitais-saibaMais'>SAIBA MAIS</a>
                </div>
                <div className='PagamentosDigitais-cubo'>
                    <div className='PagamentosDigitais-img-logo'>
                    <img className='PagamentosDigitais-logos' src={logo_carataoearthPreto} alt="" />
                        <p id='text-titulo-pagamentos-digitais'>Cartão Virtual</p>
                    </div>
                    <div className='PagamentosDigitais-text-info'>Sempre que quiser comprar online, você pode gerar um cartão de crédito virtual direto no app. Ele é temporário e seguro.</div>
                    <a href="" className='PagamentosDigitais-saibaMais'>SAIBA MAIS</a>
                </div>
                <div className='PagamentosDigitais-cubo'>
                    <div className='PagamentosDigitais-img-logo'>
                    <img className='PagamentosDigitais-logos' src={logo_qrcode} alt="" />
                        <p id='text-titulo-pagamentos-digitais'>QR Code</p>
                    </div>
                    <div className='PagamentosDigitais-text-info'>Com seu Android, você paga compras nas máquinas Cielo por QR Code sem precisar do cartão por perto e nem logar no app next.</div>
                    <a href="" className='PagamentosDigitais-saibaMais'>SAIBA MAIS</a>
                </div>
                <div className='PagamentosDigitais-cubo'>
                    <div className='PagamentosDigitais-img-logo'>
                    <img className='PagamentosDigitais-logos-watss' src={logo_whastsappLogo} alt="" />
                        <p id='text-titulo-pagamentos-digitais'>Transferências no WhatsApp</p>
                    </div>
                    <div className='PagamentosDigitais-text-info'>Agora você pode usar o serviço de transferências no WhatsApp para enviar e receber pagamentos direto pelo app, sem precisar deixar a sua conversa.</div>
                    <a href="" className='PagamentosDigitais-saibaMais'>SAIBA MAIS</a>
                </div>
                <div className='PagamentosDigitais-cubo'>
                    <div className='PagamentosDigitais-img-logo'>
                    <img className='PagamentosDigitais-logos-aprocimacao' src={logo_aprocimacao} alt="" />
                        <p id='text-titulo-pagamentos-digitais'>Pagamento por aproximação</p>
                    </div>
                    <div className='PagamentosDigitais-text-info'>Com seu novo cartão next, basta aproximar o cartão da maquininha e pronto! Tá pago!</div>
                    <a href="" className='PagamentosDigitais-saibaMais'>SAIBA MAIS</a>
                </div>
                <div className='PagamentosDigitais-cubo'>
                    <div className='PagamentosDigitais-img-logo'>
                    <img className='PagamentosDigitais-logos' src={logo_carataoearth} alt="" />
                        <p id='text-titulo-pagamentos-digitais'>Débito online</p>
                    </div>
                    <div className='PagamentosDigitais-text-info'>Aceita débito? Sim! Cadastrando seu cartão de débito nos apps parceiros você ganha mais praticidade.</div>
                    <a href="" className='PagamentosDigitais-saibaMais'>SAIBA MAIS</a>
                </div>

            </div>
        </div>
    
    )
}