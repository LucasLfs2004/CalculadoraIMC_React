import './About.css'
import React from "react";

const About = (props) => {
    return (
        <div className="about">
            <h1 className='title'>O que é IMC</h1>

            <div className='content-about'>
                <span>O IMC (Índice de massa corporal) raliza a medição de massa no seu corpo, apontando se seu peso está adequado, ou se está acima ou abaixo do peso ideal.
                    <br />
                    O Índice de Massa Corporal foi criado no século 19 pelo matemático Lambert Quélet. Com isso foi possível ter conhecimento de forma mais simplificada se uma pessoa está abaixo, acima ou no peso Ideal.
                    <br />
                    A realização do cálculo de IMC é relativamente simples, porém, dependendo do resultado, é necessário procurar um médico.
                </span>
            </div>
        </div>
    )
}

export default About