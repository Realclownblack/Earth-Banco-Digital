import '../../assets/css/parceiros.css'
import coca from '../../assets/img/coca.png'
export const Parceiros = () => {
    return (
        <div className="parceiros">
            <div className='info_parceiros'>
                <div className='primeiro_1'>
                    <img className='coca' src={coca} alt="" />
                </div>
                <div className='primeiro_2'>
                    <img className='coca' src={coca} alt="" />
                </div>
                <div className='primeiro_3'>
                    <img className='coca' src={coca} alt="" />
                </div>
                
            </div>
            <div className='info_logo'>
                <img className='coca' src={coca} alt="" />
            </div>
        </div>
    )
}