import { CounterState } from './model/types/counterTypes';
import { counterReducer, counterDecrement, counterIncrement } from './model/slice/counterSlice';
import { getCounterStateValue } from './model/selectors/getCounterStateValue/getCounterStateValue';
import { Counter } from './ui/Counter';

export {
    CounterState,
    counterReducer,
    getCounterStateValue,
    Counter,
    counterDecrement,
    counterIncrement
}