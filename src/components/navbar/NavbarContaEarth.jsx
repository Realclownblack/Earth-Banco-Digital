import '../../assets/css/navbarcontaearth.css'
import img from '../../assets/img/cover-desk (1).png'
export const NavbarContaEarth = () => {
    return(
        <div className='NavbarContaearth-div'>
            <div className='NavbarContaearth-text'>
                <div id='text-nav-1'><p> Conte asua história e impulsioneseus sonhoscom a conta Earth.</p></div>
                <div  id='text-nav-2'><p>Você acontece com saques e transferências gratuitos e ilimitados, tem segurança ao investir seu dinheiro e ainda ganha mimos eclusivos em uma conta 100% digital com cartão grátis.</p></div>
            </div>
            <div className='img-contaearth-1'><img id='img_tata2' src={img} alt="" /></div>
        </div>
    
    )
}