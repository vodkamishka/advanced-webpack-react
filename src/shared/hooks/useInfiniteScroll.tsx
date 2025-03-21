import { RefObject, useEffect } from 'react';

export interface UseInfiniteScrollProps {
    root: RefObject<HTMLDivElement>;
    target?: RefObject<HTMLDivElement>;
    callback?: () => void;
}

export const useInfiniteScroll = ({
    root,
    target,
    callback,
}: UseInfiniteScrollProps) => {
    useEffect(() => {
        if (!callback || !target.current) {
            return;
        }

        const options = {
            root: root?.current,
            rootMargin: '0px',
            threshold: 1.0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    callback();
                }
            });
        }, options);

        const current = target?.current;

        if (target) {
            observer.observe(current as HTMLDivElement);
        }

        return () => {
            if (target) {
                observer.unobserve(current);
            }
        };
    }, [callback, root, target]);
};
