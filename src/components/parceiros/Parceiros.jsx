import '../../assets/css/parceiros.css'
import coca from '../../assets/img/coca.png'
import cinema from '../../assets/img/images.png'
import uber from '../../assets/img/uber.png'
import mundopixar from '../../assets/img/mundopixar.png'
export const Parceiros = () => {
    return (
        <div className="parceiros" >
                <div className='text_info'>
                    <p>Earthshop</p>
                    <p>Faça suas compras com vantagens
                        exclusivas para quem é Earth!</p>
                </div>
            <div className='parceiros_2' >
                <div className='info_parceiros'>
                    <div className='primeiro'>
                        <img className='logo_parceiro' src={coca} alt="" />
                        <p className='text_name'>Coca Cola</p>
                        <a className='button_parceiros' href="https://www.coca-cola.com.br/"> Venha Conhecer </a>
                    </div>
                    <div className='primeiro'>
                        <img className='logo_parceiro' src={cinema} alt="" />
                        <p className='text_name'>Cinemark</p>
                        <a className='button_parceiros' href="https://www.cinemark.com.br/"> Venha Conhecer </a>
                    </div>
                    <div className='primeiro'>
                        <img className='logo_parceiro' src={uber} alt="" />
                        <p className='text_name'>Uber</p>
                        <a className='button_parceiros' href="https://www.uber.com.br/"> Venha Conhecer </a>
                    </div>
                    <div className='primeiro'>
                        <img className='logo_parceiro' src={mundopixar} alt="" />
                        <p className='text_name'>Mundo Pixar</p>
                        <a className='button_parceiros' href="https://www.mundopixar.com.br/"> Venha Conhecer </a>
                    </div>
                    
                </div>
                <div className='info_logo'>
                    <img className='logo_info' src={coca} alt="" />
                </div>
            </div>
        </div>
        
    )
}