import { Country } from '../model/types/countryTypes';

import { Select } from '@/shared/ui/Select';


interface CountrySelectProps {
    className?: string;
    label?: string;
    onChange?: (value: Country) => void;
    value?: string;
    disabled?: boolean;
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
];

export const CountrySelect = ({
    value,
    onChange,
    disabled,
}: CountrySelectProps) => {

    return (
        <Select
            label="Country"
            options={options}
            value={value}
            onChange={onChange}
            disabled={disabled}
        />
    );
};
