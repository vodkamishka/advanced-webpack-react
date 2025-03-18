import { fireEvent, screen } from '@testing-library/react';

import { Sidebar } from './Sidebar';

import '@/shared/config/i18n/i18n';
import { testProvider } from '@/shared/lib/tests/testProvider/testProvider';

describe('Sidebar', () => {
    test('with only first param', () => {
        testProvider(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        testProvider(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
