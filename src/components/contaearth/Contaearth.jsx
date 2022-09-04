import '../../assets/css/contaearth.css'
import mulher from '../../assets/img/earth-shopp.png'
export const Contaearth = () => {
    return (
        <div className="contaearth" >
            <div className='text_conta'>
                <h1 id='titulo_conta'>Conta earth</h1>
                <p id='text_titulo'>Tudo o que você
                sempre procurou em
                um banco digital</p>
            </div>
            <div className='recursos'>
                <div className='coluna1'>
                        <div className='pops'>
                            <p className='conta_titulo'>Cartões Earth</p>
                            <p className='conta_info'>Escolha o Visa com as vantagens que mais combinam com você.</p>
                            <a id="Cartoes" className="saiba_mais" href="/">SAIBA MAIS</a>
                        </div>
                        <div className='pops'>
                            <p className='conta_titulo'>Transferências por WhatsApp</p>
                            <p className='conta_info'>Pra enviar e receber $ sem sair da conversa.</p>
                            <a id="Transferencias" className="saiba_mais" href="/about">SAIBA MAIS</a>
                        </div>
                        <div className='pops'>
                            <p className='conta_titulo'>Pix</p>
                            <p className='conta_info'>Um novo jeito de fazer pagamentos a hora que quiser.</p>
                            <a id="pix" className="saiba_mais" href="/contact">SAIBA MAIS</a>
                        </div>
                    </div>
                <div className='coluna2'>
                        <div className='pops'>
                            <p className='conta_titulo'>Open Finance</p>
                            <p className='conta_info'>O sistema financeiro aberto, seguro e gratuito que chegou no arth pra te dar ainda mais autonomia.</p>
                            <a id="Open_Finance" className="saiba_mais" href="/contact">SAIBA MAIS</a>
                        </div>
                        <div className='pops'>
                            <p className='conta_titulo'>Saques</p>
                            <p  className='conta_info'>Ilimitados e grátis nos caixas Bradesco e Rede Banco24Horas.</p>
                            <a id="Saques" className="saiba_mais" href="/contact">SAIBA MAIS</a>
                        </div>
                        <div className='pops'>
                            <p className='conta_titulo'>Investimentos</p>
                            <p  className='conta_info'>Uma carteira completa pra qualquer objetivo ou perfil.</p>
                            <a id="Investimentos" className="saiba_mais" href="/contact">SAIBA MAIS</a>
                        </div>
                </div>
                <div className='coluna3'>
                        <div className='pops'>
                            <p className='conta_titulo'>Seguros</p>
                            <p  className='conta_info'>A proteção perfeita pra cuidar das suas conquistas e bem-estar.</p>
                            <a id="Seguros" className="saiba_mais" href="/contact">SAIBA MAIS</a>
                        </div>
                        <div className='pops'>
                            <p className='conta_titulo'>EarthShop</p>
                            <p  className='conta_info'>Compre nas maiores lojas do país com segurança direto pelo app earth e receba dinheiro de volta na sua conta.</p>
                            <a id="EarthShop" className="saiba_mais" href="/contact">SAIBA MAIS</a>
                        </div>
                </div>
            </div>
            <div className='mulher_div'>
                <img className='img_mulher' src={mulher} alt="" />
            </div>
           <div className='barra'><div></div></div>
        </div>
        
    )
}