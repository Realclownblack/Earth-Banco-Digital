import '../../assets/css/parceiros.css'
import coca from '../../assets/img/coca.png'
import cinema from '../../assets/img/images.png'
import uber from '../../assets/img/uber.png'
import mundopixar from '../../assets/img/mundopixar.png'
import personagem from '../../assets/img/earth_parceiros.png'

export const Parceiros = () => {
    return (
        <div className="parceiros" >
                <div className='text_info'>
                    <p className='text_titulo'>Earthshop</p>
                    <p className='text_infotitulo'>Faça suas compras com vantagens
                        exclusivas para quem é Earth!</p>
                    <a className='earthshop' href="">Conhecer Earthshop</a>
                </div>
            <div className='parceiros_2' >
                <div className='info_parceiros'>
                    <div className='primeiro'>
                        <img className='logo_parceiro' src={coca} alt="" />
                        <p className='text_name'>Coca Cola</p>
                        <a className='button_parceiros' href="https://www.coca-cola.com.br/"target={'_blank'} > Venha Conhecer </a>
                    </div>
                    <div className='primeiro'>
                        <img className='logo_parceiro' src={cinema} alt="" />
                        <p className='text_name'>Cinemark</p>
                        <a className='button_parceiros' href="https://www.cinemark.com.br/" target={'_blank'}> Venha Conhecer </a>
                    </div>
                    <div className='primeiro'>
                        <img className='logo_parceiro' src={uber} alt="" />
                        <p className='text_name'>Uber</p>
                        <a className='button_parceiros' href="https://www.uber.com.br/" target={'_blank'}> Venha Conhecer </a>
                    </div>
                    <div className='primeiro'>
                        <img className='logo_parceiro' src={mundopixar} alt="" />
                        <p className='text_name'>Mundo Pixar</p>
                        <a className='button_parceiros' href="https://www.mundopixar.com.br/" target={'_blank'}> Venha Conhecer </a>
                    </div>
                    
                </div>
               
                <div className='info_logo'>
                    <img className='logo_info' src={personagem} alt="" />
                    <div className='circulo1'></div>
                    <div className='circulo2'></div>
                    <div className='circulo3'></div>
                </div>
              
            </div>
           
        </div>
        
    )
}