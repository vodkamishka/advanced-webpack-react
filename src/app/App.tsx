import React, { useState } from 'react';
import { Sidebar } from 'widgets/sidebar';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/navbar';
import { AppRouter } from 'app/providers/router';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal'

const App = () => {
    const { theme } = useTheme();

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            >
                {'Piece words and group words'}
            </Modal>
            <button onClick={openModal}>{'toggle'}</button>
            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;
