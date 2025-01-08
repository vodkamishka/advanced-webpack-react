import React from 'react';
import './styles/index.scss';
import { Link } from "react-router-dom";

import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import {classNames} from "shared/lib/classNames";

import AppRouter from "app/providers/router/ui/AppRouter";
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

                    <AppRouter />

                </div>
        </>
    );
};

export default App;