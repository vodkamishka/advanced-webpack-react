import { classNames } from '@/shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

interface CounterProps {
    className?: string
}

export const Counter = ({ className }: CounterProps) => {
    const { t } = useTranslation();
    const counterValue = useCounterValue();
    const { decrement, increment } = useCounterActions();

    const handleInc = () => {
        increment();
    };

    const handleDec = () => {
        decrement();
    };
    
    return (
        <div className={classNames('', {}, [className])}>
            <h1 data-testid="value-title">{counterValue}</h1>

            <button
                data-testid="increment-btn"
                onClick={handleInc}
            >
                {t('Инкремент')}
            </button>
            <button
                data-testid="decrement-btn"
                onClick={handleDec}
            >
                {t('Декремент')}
            </button>
        </div>
    );
};
