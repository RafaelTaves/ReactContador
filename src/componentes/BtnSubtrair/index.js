import './BtnSubtrair.css'

const BtnSubtrair = (props) => {
    
    return(
        <div className='subtrair'>
            <button onClick={props.aoAlterar}>-</button>
        </div>
    )
}

export default BtnSubtrair