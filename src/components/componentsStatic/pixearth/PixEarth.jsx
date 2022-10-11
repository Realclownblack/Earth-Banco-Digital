import '../../../assets/css/cssStatic/PixEarth.css'
import curva from '../../../assets/img/curva-5.png'
export const PixEarth = () => {
    return(
        <div className='PixEarth-div'>
            <div className='PixEarth-Servicos'>
                <p id='PixEarth-text-titulo'>SERVIÇOS</p>
                <p id='PixEarth-text-maior'>O que já era rápido, ficou ainda Mais Pix</p>
                <p id='PixEarth-text-info-pix'>Com as chaves Pix, suas transações são autenticadas e ficam seguras. Pra cadastrar a sua 🔑 no earth, é só abrir o app em Menu = Pix e seguir o passo a passo</p>
            </div>
            <div className='PixEarth-img'>
                <img src={curva} alt="" />
            </div>
        </div>
    
    )
}