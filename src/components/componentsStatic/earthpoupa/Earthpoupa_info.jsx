import '../../../assets/css/cssStatic/Earthpoupa_info.css'
import poupanca from '../../../assets/img/poupanca.png'
import poupanca_mulher from '../../../assets/img/earthpopa_img_1.jpg'

export const Earthpoupa_info = () =>{
    return(
        <div className='Earthpoupa_info-div'>
            <div className='Earthpoupa_info-div_2'>
                <div className='Earthpoupa_info-text-poupa'>
                    <p id='Earthpoupa_info-titulo'>EarthPoupa</p>
                    <span id='Earthpoupa_info-texto'>A Poupança é o tipo de investimento considerado mais tradicional e seguro.
                        É o mais indicado para o investidor conservador, que não está disposto a correr riscos.
                    </span>
                    <img id='foto_earthpoupa' src={poupanca} alt="" />
                </div>
                <div className='Earthpoupa_info-text-contratar'>
                    <img id='Earthpoupa_info-img' src={poupanca_mulher} alt="" />
                </div>                
            </div>

        </div>
    )
}