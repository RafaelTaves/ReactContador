import './BtnAdicionar.css'

const BtnAdicionar = (props) => {
    
    return(
        <div className='adicionar'>
            <button onClick={props.aoAlterar}>+</button>
        </div>
    )
}

export default BtnAdicionar