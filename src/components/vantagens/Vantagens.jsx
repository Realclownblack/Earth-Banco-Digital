import '../../assets/css/vantagens.css'
import img_0 from '../../assets/img/img_0.jpg'
import img_1 from '../../assets/img/img_1.jpg'
import img_2 from '../../assets/img/img_2.jpg'
import { Link } from 'react-router-dom';


export const Vantagens = () => {
    return (
        <div className="container">
            <div className='inform_vantagens'>
                <p className='acontecer'>PRA FAZER ACONTECER</p>
                <p className='earth'>O earth tem vantagens exclusivas que vão te conquistar também</p>
            </div>
            <div className='vantagens'>
                <div className='tarifa'>
                    <img className='img_vantagens' src={img_0} alt="" />
                    <h1 className='titulo_vantagens'>Sem tarifas</h1>
                    <p className='text_vantagens'>Conta digital gratuita e cartão sem anuidade</p>

                </div>
                <div className='amigos'>
                    <img className='img_vantagens' src={img_1} alt="" />
                    <h1 className='titulo_vantagens'>Indique amigos</h1>
                    <p className='text_vantagens'>Indique seus amigos para o earth e aproveitem juntos todas as vantagens de um banco 100% digital e gratuito</p>
                    <a className='button_vantagens' href="#cadastro">QUERO UMA CONTA TAMBÉM</a>

                </div>
                <div className='cdb'>
                    <img className='img_vantagens' src={img_2} alt="" />
                    <h1 className='titulo_vantagens'>CDB e Fundos de Investimento</h1>
                    <p className='text_vantagens'>Opções seguras de investimentos que rendem mais que a poupança.</p>

                </div>
            </div>
        </div>
    )
}