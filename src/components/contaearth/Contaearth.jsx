import '../../assets/css/contaearth.css'
export const Contaearth = () => {
    return (
        <div className="contaearth" >
            <div className='recursos'>
            <div className='coluna1'>
                    <div className='conta'>
                        <p>Account</p>
                        <a id="Account" className="menu-item" href="/">Account</a>
                    </div>
                    <div className='temearth'>
                        <p>Have on Earth</p>
                        <a id="Have_on_Earth" className="menu-item" href="/about">Have on Earth</a>
                    </div>
                    <div className='emprestimos'>
                        <p>Loans</p>
                        <a id="Loans" className="menu-item" href="/contact">Loans</a>
                    </div>
                </div>
               <div className='colun2'>
                    <div className='open'>
                        <p>Open Finance</p>
                        <a id="Open_Finance" className="menu-item" href="/contact">Open Finance</a>
                    </div>
                    <div className='ajuda'>
                        <p>Help</p>
                        <a id="Help" className="menu-item" href="/contact">Help</a>
                    </div>
                    <div className='sobre'>
                        <p>About Us</p>
                        <a id="About Us" className="menu-item" href="/contact">About Us</a>
                    </div>
               </div>
                

            </div>
           <div className='barra'><div></div></div>
        </div>
        
    )
}