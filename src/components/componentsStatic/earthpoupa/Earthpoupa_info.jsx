import '../../../assets/css/cssStatic/Earthpoupa_info.css'
import poupanca from '../../../assets/img/poupanca.png'

export const Earthpoupa_info = () =>{
    return(
        <div className='Earthpoupa_info-div'>
            <div className='Earthpoupa_info-text-poupa'>
                <p id='Earthpoupa_info-titulo'>EarthPoupa</p>
                <span id='Earthpoupa_info-texto'>A Poupança é o tipo de investimento considerado mais tradicional e seguro.
                     É o mais indicado para o investidor conservador, que não está disposto a correr riscos.
                </span>
                <img id='foto_earthpoupa' src={poupanca} alt="" />
            </div>
            <div className='Earthpoupa_info-text-contratar'>

            </div>
        </div>
    )
}