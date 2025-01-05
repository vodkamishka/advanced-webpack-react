import React from 'react';
import '../index.scss';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import AboutPage from "../pages/AboutPage/AboutPage";
import MainPage from "../pages/MainPage/MainPage";

const App = () => {
    return (
        <BrowserRouter>
            <div className={'app'}>
                fdfgfhgjjkuyiuouiop
                <ul className="navbar">
                    <li>
                        <Link to="/">Main</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
                <Routes>
                    <Route path={"/"} element={<MainPage />}/>
                    <Route path={"/about"} element={<AboutPage />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;