import React, {Suspense} from 'react';
import './styles/index.scss';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";

const App = () => {
    return (
        <BrowserRouter>
            <div className={'app dark'}>
                fdfgfhgjjkuyiuouiop
                <ul className="navbar">
                    <li>
                        <Link to="/">Main</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>

                <Suspense>
                    <Routes>
                        <Route path={"/"} element={<MainPageAsync />}/>
                        <Route path={"/about"} element={<AboutPageAsync />}/>
                    </Routes>
                </Suspense>

            </div>
        </BrowserRouter>
    );
};

export default App;