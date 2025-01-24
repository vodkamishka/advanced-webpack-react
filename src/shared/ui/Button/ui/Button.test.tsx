import { render, screen} from '@testing-library/react';
import { Button } from 'shared/ui/Button';

describe('Button', () => {
    test('renders with text', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
});