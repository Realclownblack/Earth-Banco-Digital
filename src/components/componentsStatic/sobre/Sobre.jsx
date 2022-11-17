import '../../../assets/css/cssStatic/Sobre.css'
import fachada from '../../../assets/img/earth bank.png'
import celular from '../../../assets/img/celular-img-normal.png'
import curva from '../../../assets/img/curva-5.png'


export const Sobre = () => {
    return(
        <div className='Sobre-div'>
            <img id='Sobre-img' src={fachada} alt="" />
            <div className='Sobre-div-text'>
                <div className='Sobre-div-1'>
                    <span id='Sobre-text-1'>Nós te ajudamos a fazer acontecer</span>
                </div>
                <img id='sobre-celular' src={celular} alt="" />
                <div className='Sobre-div-2'>
                    <span>Somos o earth. <span className='Sobre-div-banco'>Um banco 100% digital e gratuito,</span> que nasceu com a missão de oferecer para todos os brasileiros a oportunidade de ter uma conta e um cartão sem custos,
                         taxas ou anuidade. Acreditamos que desta maneira mais pessoas terão acesso a uma vida financeira organizada e a oportunidade de realizar seus sonhos.</span>
                </div>                
            </div>
            <div className='Sobre-div-misao'>
                <span id='Sobre-misao-text-1'>Nossa missão é atuar numa plataforma de serviços financeiros e não financeiros, proporcionando experiências fantásticas para transformar a vida das pessoas.
                <img id='sobre-img-curva' src={curva} alt="" /></span>
                <div className='Sobre-div-misao-text2'>
                    <span className='sobre-misao-text2'><p className='sobre-misao-text2-p'>Nosso propósito </p>Somos um banco, é verdade. Mas somos um banco diferente, que coloca você em primeiro lugar porque acreditamos que conectar pessoas e sonhos,
                    é o melhor jeito de criar um mundo mais próspero. E um mundo mais próspero é uma ferramenta poderosa de inclusão e de transformação.</span>
                    <span className='sobre-misao-text1'><p className='sobre-misao-text2-p'>Nossos valores</p>Nossos esforços são para fazer a diferença para nossos clientes, ajudando a criar um sistema mais democrático, inclusivo e que valorize a diversidade. Somos apaixonados por gente e pelo que fazemos e trabalhamos incansavelmente, com coragem de inovar,
                    utilizando como norte a simplicidade, a segurança e a transparência para que nossos clientes tenham sempre o melhor.</span>                    
                </div>
            </div>

        </div>
    
    )
}