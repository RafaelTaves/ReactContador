import BtnAdicionar from '../BtnAdicionar'
import BtnSubtrair from '../BtnSubtrair'
import Visor from '../visor'
import './Contador.css'

const Contador = () => {
    
    return(
        <section className='container'>
            <BtnSubtrair/>
            <Visor />
            <BtnAdicionar />
        </section>
    )
}

export default Contador