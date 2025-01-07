import React, {Suspense, useContext, useState} from 'react';
import './styles/index.scss';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";

import {useTheme} from "./theme/useTheme";
const App = () => {

    const {theme, toggleTheme} = useTheme();

    return (
        <>
                <div className={`app ${theme}`}>
                    fdfgfhgjjkuyiuouiop
                    <ul className="navbar">
                        <li>
                            <Link to="/">Main</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>

                    <button onClick={toggleTheme}>change theme</button>

                    <Suspense>
                        <Routes>
                            <Route path={"/"} element={<MainPageAsync/>}/>
                            <Route path={"/about"} element={<AboutPageAsync/>}/>
                        </Routes>
                    </Suspense>

                </div>
        </>
    );
};

export default App;