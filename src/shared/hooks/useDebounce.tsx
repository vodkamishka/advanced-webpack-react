import { useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useDebounce = (callback: (...args: any[]) => void, delay: number) => {

    const timer = useRef<NodeJS.Timeout | null>(null);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (...args: any[]) => {
        clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            callback(...args);
        }, delay)

    }
}