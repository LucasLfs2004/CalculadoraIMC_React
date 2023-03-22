import "./Content.css"
import React from "react"
import { Routes, Route } from "react-router-dom"

import About from "../views/examples/About"
import How from "../views/examples/How"
import Home from "../views/examples/Home"


const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/how" element={<How />} />
            <Route exact path="/" element={<Home />} />
        </Routes>
    </main>
)

export default Content