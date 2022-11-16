import '../../../assets/css/cssStatic/Contato.css'
import negao from '../../../assets/img/muito-mais.png'


export const Contato_earth = () =>{
    return(
        <div className='Contato-div'>
            <div  className='Contato-div-lado-1'>
                <div>
                    <span id='Contato-titulo'>
                        Quer falar com a gente?
                    </span>
                    <p>gente?É só mandar sua mensagem por aqui ou ligar pra qualquer um dos números abaixo ;</p>                    
                </div>
                <div class="Contato-container">
                <form action="#" class="form-contact" method="post" tabindex="1">
                    <div class="Contato-container-input">
                        <div>
                            <div class="group">      
                                <input type="text" required name="name"/>
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Name</label>
                            </div>
                            <div class="group">      
                                <input type="email" required name="email"/>
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Email</label>
                            </div>                          
                        </div>
                        <div>
                        <div class="group">      
                                <input type="tel" required  name="tel"/>
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Celular</label>
                            </div>
                            <div class="group">      
                                <input type="Cpf" required name="Cpf"/>
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Cpf</label>
                            </div>                                    
                        </div>
                    </div>
                    <textarea class="form-contact-textarea" name="conteudo" placeholder="Deixe uma mensagem" required></textarea>
                    <button type="submit" class="form-contact-button">Enviar</button>
                </form>
        </div>
                
            </div>
            <div  className='Contato-div-lado-2'>
                <img id='Contat-img' src={negao} alt="" />
            </div>

        </div>
    )
}