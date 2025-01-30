import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from "widgets/sidebar";
import 'shared/config/i18n/i18n';
import { renderWithI18nRouter } from "shared/lib/tests/renderWithI18nRouter/renderWithI18nRouter";

describe('Sidebar', () => {
    test('with only first param', () => {
        renderWithI18nRouter(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        renderWithI18nRouter(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
