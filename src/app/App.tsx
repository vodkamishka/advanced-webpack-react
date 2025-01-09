import React from 'react';
import './styles/index.scss';

import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import {classNames} from "shared/lib/classNames";

import AppRouter from "app/providers/router/ui/AppRouter";
import {Navbar} from "widgets/navbar";
const App = () => {

    const {theme, toggleTheme} = useTheme();

    return (
        <>
                <div className={classNames('app', {}, [theme])}>
                    <Navbar/>

                    <button onClick={toggleTheme}>change theme</button>

                    <AppRouter />

                </div>
        </>
    );
};

export default App;