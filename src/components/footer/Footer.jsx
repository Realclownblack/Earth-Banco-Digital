import '../../assets/css/footer.css'
import google_play from '../../assets/img/google-play.svg'
import app_store from '../../assets/img/app-store.svg'
import facebook from '../../assets/img/facebook.png'
import instragram from '../../assets/img/instagram.png'
import whatsapp from '../../assets/img/whatsapp.png'
import youtube from '../../assets/img/youtube.png'
import logo from '../../assets/img/earth bank.png'
export const Footer = () => {

       return (
              <footer className="Footer">
                      <div className="footer_1">
                            <img className='logo' src={logo} alt="" />
                            <div className='Baixaapp'>
                                   <p>Baixa App</p>

                                   <img src={app_store} alt="" />

                                   <img src={google_play} alt="" />

                            </div>
                            <div className='Atendimento'>
                                   <p>Atendimento</p>

                                   <p>Central de Relacionamento <br />
                                   0800 275 6398</p>

                                   <p>SAC <br />
                                   0800 722 6398</p>

                                   <p>Ouvidoria <br />
                                   0800 688 6398</p>

                                   <p>falaEarth@gmail.com</p>

                                   <i>Outros Contatos</i>

                            </div>
                            <div Informações>
                                   <p>Informações</p>

                                   <p>Caixas Eletrônicos</p>

                                   <p>LGPD</p>

                                   <p>Diretiva de Privacidade</p>

                                   <p>Documentos Importantes</p>

                                   <p>Cotação do Dólar da sua fatura</p>

                                   <p>Procon</p>

                                   <p>Código de Defesa do Consumidor</p>
                            </div>
                            <div className='Empresa'>
                                   <p>Empresa</p>

                                   <p>What’s earth</p>

                                   <p>Sobre o earth</p>

                                   <p>Carreiras</p>
                            </div>
                     </div> 
                     <div className="footer_2">
                            <div className='Text_Footer'>
                                   <p className='text_nu1'>Earth Tecnologia e Serviços Digitais © 2020. <br />
                                   Todos os direitos reservados. CNPJ: nº 15.011.336/0001-27 <br />
                                   Rua Domingos Sérgio dos Anjos, 277 - Jardim Santo Elias, São Paulo - SP, 05136-170</p>

                                   <p className='text_nu2'>
                                   O Next Tecnologia e Serviços Digitais, Brasil, <br />
                                   é uma plataforma digital que atua como correspondente no País de uma instituição financeira, <br />
                                   nos termos da Resolução CMN n° 3.954 de 24 de fevereiro de 2011.
                                   </p>

                                   <p className='text_nu3'>
                                   O next não é uma instituição financeira, <br />
                                   de modo que quem realiza as operações de crédito, <br />
                                   manutenção de contas e demais atividades financeiras é o BANCO BRADESCO S.A., <br />
                                    banco múltiplo, inscrito no CNPJ sob nº 60.746.948.0001-12, <br />
                                   com sede na Cidade de Deus, s/n, Vila Yara, Osasco, SP, CEP 06029-900.
                                   </p>
                            </div>
                            <div className='Redes_footer'>
                                   <div className='Logo_redes'>
                                          <p>SIGA EARTH</p>
                                          <img className='redes_logo' src={facebook} alt="facebook" />
                                          <img className='redes_logo' src={instragram} alt="instragram" />
                                          <img className='redes_logo' src={youtube} alt="youtube" />
                                          <img className='redes_logo' src={whatsapp} alt="whatsapp" /> 
                                   </div>

                            </div>
                     </div>
              </footer>
       )
}