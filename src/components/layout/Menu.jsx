import React from "react";

import "./Menu.css"

import { Link } from 'react-router-dom'

const Menu = (props) => {
    return (
        <aside className="Menu">
            <h1 className="title">Índice de Massa Corporal</h1>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" >Início</Link>
                        </li>
                        <li>
                            <Link to="/about" >O que é IMC</Link>
                        </li>
                        <li>
                            <Link to="/how" >Como o IMC é calculado</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default Menu