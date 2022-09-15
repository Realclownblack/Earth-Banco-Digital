import '../../assets/css/navbar.css'
import img from '../../assets/img/img_8.png'
export const Navbar = () => {
    return(
        <div>
            <div className='slide'>
                <div className='CentralText'>
                    <div className='img-div'>
                        <img className='img-mulhe' src={img} alt="" />
                    </div>
                    <div className='text_nav'>
                        <p>Conta grátis, <br /> 
                        100% digital e com serviços ilimitados</p>
                        <br />
                        <span>
                            <p>para você</p>
                        </span>
                        <br />
                        <span>
                            <p>fazer acontecer</p>
                        </span> 
                    </div>

                </div>
                
            </div>
            <div>
                <nav className='nav_2'>
                    
                </nav>
            </div>
        </div>
    
    )
}