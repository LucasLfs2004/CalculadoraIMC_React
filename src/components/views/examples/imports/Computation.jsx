import React, { useState } from "react";
import "./Computation.css"

function classificacao(imc) {
    if (imc == 0)
    return <span className="text">Preencha os campos Peso e Altura para descobrir seu IMC</span>
    else if (imc < 18.5)
        return <span className="text">Abaixo do peso</span>
    else if (imc > 18.5 && imc < 24.9)
        return <span className="text">Peso ideal</span>
    else if (imc > 25 && imc < 29.9)
        return <span className="text">Acima do peso</span>
    else if (imc > 30 && imc < 34.9)
        return <span className="text">Obesidade classe I</span>
    else if (imc > 35 && imc < 39.9)
        return <span className="text">Obesidade classe II</span>
    else if (imc > 40)
        return <span className="text">Obesidade classe III</span>
}


const Computation = (props) => {
    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
    const [imc, setImc] = useState(0)
    const [showImc, setShowImc] = useState(false)



    return (
        <div className="Comp">
            <div className="valores">
                <div className="entrada">
                    <div className="pre-entrada">
                        <span className="text">Insira seu peso:</span>
                        <span className="text">Insira sua altura:</span>
                    </div>
                </div>
                <div className="entrada">
                    <div className="pre-entrada">
                        <input className="input" type="number" value={peso} onChange={(e) => { setPeso(e.target.value) }} />
                        <input className="input" type="number" value={altura} onChange={(e) => { setAltura(e.target.value) }} />
                    </div>
                </div>
                <div className="entrada">
                    <div className="pre-entrada">
                        <span className="text">kg</span>
                        <span className="text">Cm</span>
                    </div>
                </div>
            </div>

            <div>
                <button className="btn" onClick={(e) => setImc(Math.round((peso / ((altura / 100) * (altura / 100))) * 100) / 100)}>Calcular</button>
            </div>
            <div className="result">
                {imc >= 10 && imc < 70 ? <span className="text">Seu imc é: {imc}</span> : <span></span>}
                {classificacao(imc)}
            </div>
        </div>
    )
}

export default Computation