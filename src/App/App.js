import React from "react";
import './App.css';
import {Topbar} from "../containers/Navigation/Topbar/Topbar";
import {Footer} from "../containers/Navigation/Footer/Footer";
import {Homepage} from "../containers/Pages/Home/Homepage";
import {Catalog} from "../containers/Pages/Catalog/Catalog";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {FishPage} from "../containers/Pages/FishPage/FishPage";
import {Loader} from "../components/loader/Loader"

export const App = () => (
    <BrowserRouter>
        <div className="App">
            <Topbar />
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path={'/catalog'} >
                    <Route path='' element={<Catalog />} />
                    <Route path='fish/:fishId' element={<FishPage />} />
                </Route>
                <Route path='/cart' element={<Loader>Loading</Loader>} />
                <Route path='*' element={<h1>404</h1>} />
            </Routes>
            <Footer />
        </div>
    </BrowserRouter>
)
export default App;
