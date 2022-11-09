import '../../../assets/css/cssStatic/Earthpoupa_info_2.css'
import poupanca_mulher from '../../../assets/img/mulher-negra-abracando-seu-cofrinho_153437-1462.png'
import pergunta_2 from '../../../assets/img/pergunta_2.png'

export const Earthpoupa_info_2 = () =>{
    return(
        <div className='Earthpoupa_info-div_1'>
            <div className='Earthpoupa_info-div_3'>
                <div className='Earthpoupa_info-text-contratar_2'>
                    <img id='Earthpoupa_info-img_2' src={poupanca_mulher} alt="" />
                </div>    
                <div className='Earthpoupa_info-text-poupa_2'>
                    <img id='earthpoupa-pergunta' src={pergunta_2} alt="" />
                    <span id='Earthpoupa_info-texto_2'>Facil contratação pelo app sem custo e com segurança, guarda aquele dinherinho pra realizar seu sonho Earth poupa e ideal pra você 
                            aqui seu dinhero rende de verdade.
                    </span>
                </div>            
            </div>

        </div>
    )
}