import '../../../assets/css/cssStatic/Earthpoupa_info.css'
import poupanca_mulher from '../../../assets/img/earthpopa_img_1.jpg'
import pergunta_1 from '../../../assets/img/pergunta_1.png'


export const Earthpoupa_info = () =>{
    return(
        <div className='Earthpoupa_info-div'>
            <div className='Earthpoupa_info-div_2'>
                <div className='Earthpoupa_info-text-poupa'>
                    <img id='earthpoupa-pergunta' src={pergunta_1} alt="" />
                    <span id='Earthpoupa_info-texto'>A Poupança é o tipo de investimento considerado mais tradicional e seguro.
                        É o mais indicado para o investidor conservador, que não está disposto a correr riscos.
                    </span>
                </div>
                <div className='Earthpoupa_info-text-contratar'>
                    <img id='Earthpoupa_info-img' src={poupanca_mulher} alt="" />
                </div>                
            </div>

        </div>
    )
}