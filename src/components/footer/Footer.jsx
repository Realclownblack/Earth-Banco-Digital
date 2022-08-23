import '../../assets/css/footer.css'
import google_play from '../../assets/img/google-play.svg'
import app_store from '../../assets/img/app-store.svg'
import facebook from '../../assets/img/facebook.png'
import instragram from '../../assets/img/instagram.png'
import whatsapp from '../../assets/img/whatsapp.png'
import youtube from '../../assets/img/youtube.png'
export const Footer = () => {

       return (
              <div className="Footer">
                     <div className="footer_1">
                            <div className='Text_Footer'>
                                   <p>Next Tecnologia e Serviços Digitais © 2020. <br />
                                   Todos os direitos reservados. CNPJ: nº 15.011.336/0001-27 <br />
                                   Rua Domingos Sérgio dos Anjos, 277 - Jardim Santo Elias, São Paulo - SP, 05136-170</p>

                                   <p>
                                   O Next Tecnologia e Serviços Digitais, Brasil, <br />
                                   é uma plataforma digital que atua como correspondente no País de uma instituição financeira, <br />
                                   nos termos da Resolução CMN n° 3.954 de 24 de fevereiro de 2011.
                                   </p>

                                   <p>
                                   O next não é uma instituição financeira, <br />
                                   de modo que quem realiza as operações de crédito, <br />
                                   manutenção de contas e demais atividades financeiras é o BANCO BRADESCO S.A., banco múltiplo, inscrito no CNPJ sob nº 60.746.948.0001-12, <br />
                                   com sede na Cidade de Deus, s/n, Vila Yara, Osasco, SP, CEP 06029-900.
                                   </p>
                            </div>
                            <div className='Redes_fopter'>
                                   <p>SIGA EARTH</p>
                                   <div className='Logo_redes'>
                                          <img className='redes_logo' src={facebook} alt="facebook" />
                                          <img className='redes_logo' src={instragram} alt="instragram" />
                                          <img className='redes_logo' src={youtube} alt="youtube" />
                                          <img className='redes_logo' src={whatsapp} alt="whatsapp" /> 
                                   </div>

                            </div>
                     </div>
                     <div className="footer_2">
                            <p>jhfaswyuas\zfoyasff</p>
                     </div>
              </div>
       )
}