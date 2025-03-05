import { useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useThrottle = (callback: (...args: any[]) => void, delay: number) => {

    const timer = useRef<NodeJS.Timeout | null>(null);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (...args: any[]) => {
        if (!timer.current) {

            callback(...args);
            timer.current = setTimeout(() => {
                timer.current = null;
            }, delay)
        }
    }
}