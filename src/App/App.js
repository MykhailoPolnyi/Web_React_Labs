import React from "react";
import './App.css';
import {Topbar} from "../containers/Navigation/Topbar/Topbar";
import {Footer} from "../containers/Navigation/Footer/Footer";
import {Homepage} from "../containers/Pages/Home/Homepage";
import {Catalog} from "../containers/Pages/Catalog/Catalog";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export const App = () => (
    <BrowserRouter>
        <div className="App">
            <Topbar />
            <Routes>
                <Route path={'/'} element={<Homepage />} />
                <Route path={'/catalog'} element={<Catalog />} />
                <Route path={'/cart'} element={<h1>Hello cart</h1>} />
                <Route path={'/catalog/fish'} element={<div>AA</div>} />
            </Routes>
            <Footer />
        </div>
    </BrowserRouter>
)
export default App;
