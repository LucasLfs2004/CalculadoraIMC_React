import React from "react";
import './App.css'
import Menu from "../layout/Menu";
import Content from "../layout/Content";

import { BrowserRouter } from "react-router-dom";

const App = (props) => {
    return (
        <div className="app">
            <BrowserRouter>
                <Menu />
                <div className="card">
                    <Content />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App