import { useState } from 'react'
import BtnAdicionar from '../BtnAdicionar'
import BtnSubtrair from '../BtnSubtrair'
import Visor from '../visor'
import './Contador.css'

const Contador = () => {
    const [valorInicial, setValorInicial] = useState(0)

    const incrementarValor = () => {
    setValorInicial(valorInicial + 1)
    }

    const subtrairValor = () => {
    setValorInicial(valorInicial - 1)
    }
    return(
        <section className='container'>
            <BtnSubtrair aoAlterar={subtrairValor} />
            <Visor valor={valorInicial} />
            <BtnAdicionar aoAlterar={incrementarValor} />
        </section>
    )
}

export default Contador