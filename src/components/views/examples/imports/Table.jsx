import React from "react";
import "./Table.css"

const Table = (props) => {
    return (
        <div className="Table">
            <div className='column'>
                <h1>IMC</h1>
                <p> Menor do que 18,5</p>
                <p> 18,5 - 24,9</p>
                <p> 25,0 - 29,9</p>
                <p> 30,0 - 34,9</p>
                <p> 35,0 - 39,9</p>
                <p>Maior ou igual a 40,0</p>
            </div>
            <div className='column'>
                <h1>Classificações</h1>
                <p> Abaixo do peso</p>
                <p> Peso ideal</p>
                <p> Acima do peso</p>
                <p> Obesidade classe I</p>
                <p> Obesidade classe II</p>
                <p> Obesidade classe III</p>
            </div>
        </div>
    )
}

export default Table