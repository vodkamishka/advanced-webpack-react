import { Select } from '@/shared/ui/Select';
import { Currency } from '../model/types/currencyTypes';


interface CurrencySelectProps {
    className?: string;
    label?: string;
    onChange?: (value: Currency) => void;
    value?: string;
    disabled?: boolean;
}

const options = [
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = ({
    value,
    onChange,
    disabled,
}: CurrencySelectProps) => {

    return (
        <Select
            label="Currency"
            options={options}
            value={value}
            onChange={onChange}
            disabled={disabled}
        />
    );
};