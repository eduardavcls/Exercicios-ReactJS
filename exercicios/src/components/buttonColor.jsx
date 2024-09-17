import { useState } from "react";

const ButtonChangeColor = () => {

    const {background , setbackground} = useState('lightblue');
    const changeColor = () => {
        setbackground((nowColor) => (nowColor === 'lightblue' ? 'lightcoral' : 'lightblue'))
    }

    return (
        <div style={{backgroundColor: '#fff' , padding:'20px' , textAlign:'center'}}>
            <button onClick={changeColor}>trocar cor de fundo</button>
           
        </div>
    )
}

export default ButtonChangeColor;