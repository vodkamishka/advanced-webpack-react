import { useRef } from 'react';

export const useDebounce = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    callback: (...args: any[]) => void,
    delay: number,
) => {
    const timer = useRef<NodeJS.Timeout | null>(null);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (...args: any[]) => {
        clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            callback(...args);
        }, delay);
    };
};
