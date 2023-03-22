import React from 'react'
import './Home.css'
import Table from './imports/Table'
import Computation from './imports/Computation'

const Home = props => (
    <div className="Home">
        <h1>Descubra seu IMC!!!</h1>
        <div className='card'>
            <div class="cardContent">
                <Table />
                <Computation />
            </div>
        </div>
    </div>
)

export default Home