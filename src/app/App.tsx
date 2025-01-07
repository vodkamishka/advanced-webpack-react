import React, {Suspense} from 'react';
import './styles/index.scss';
import {Routes, Route, Link} from "react-router-dom";

import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import {classNames} from "shared/lib/classNames";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
const App = () => {

    const {theme, toggleTheme} = useTheme();

    return (
        <>
                <div className={classNames('app', {}, [theme])}>
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
                            <Route path={"/"} element={<MainPage/>}/>
                            <Route path={"/about"} element={<AboutPage/>}/>
                        </Routes>
                    </Suspense>

                </div>
        </>
    );
};

export default App;