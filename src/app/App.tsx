import React from 'react';
import {Sidebar} from "widgets/sidebar";
import {useTheme} from "app/providers/ThemeProvider";
import {Navbar} from "widgets/navbar";
import {AppRouter} from "app/providers/router";
import {classNames} from "shared/lib/classNames";


const App = () => {
   const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;
