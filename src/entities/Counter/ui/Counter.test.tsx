import { screen, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';
import { testProvider } from 'shared/lib/tests/testProvider/testProvider';
describe('Counter', () => {
    test('test render', () => {
        testProvider(<Counter />);
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('increment', () => {
        testProvider(<Counter />);
        fireEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('decrement', () => {
        testProvider(<Counter />);
        fireEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
