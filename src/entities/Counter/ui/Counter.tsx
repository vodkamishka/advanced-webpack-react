import { classNames } from 'shared/lib/classNames/classNames';
import { getCounterStateValue } from '../model/selectors/getCounterStateValue/getCounterStateValue';
import { useDispatch, useSelector } from 'react-redux';
import { counterDecrement, counterIncrement } from '../';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

interface CounterProps {
    className?: string
}

export const Counter = ({ className }: CounterProps) => {
    const { t } = useTranslation();
    const counterValue = useSelector(getCounterStateValue);
    const dispatch = useDispatch();
    
    const increment = useCallback(() => dispatch(counterIncrement()), [dispatch]);
    const decrement = useCallback(() => dispatch(counterDecrement()), [dispatch]);
    
    return (
        <div className={classNames('', {}, [className])}>
            <h1 data-testid="value-title">{counterValue}</h1>

            <button
                data-testid="increment-btn"
                onClick={increment}
            >
                {t('Инкремент')}
            </button>
            <button
                data-testid="decrement-btn"
                onClick={decrement}
            >
                {t('Декремент')}
            </button>
        </div>
    );
};
