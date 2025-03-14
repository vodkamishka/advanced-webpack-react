import React, { FC, ReactNode, useCallback, useEffect, useRef } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import { useLocation } from 'react-router-dom';
import { getScroll, setScrollPosition } from '@/features/ScrollObserver';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { useThrottle } from '@/shared/hooks/useThrottle';
import { useInfiniteScroll } from '@/shared/hooks/useInfiniteScroll';



interface PageProps {
    className?: string;
    children?: ReactNode;
    callback?: () => void;
    disableScroll?: boolean;
}

export const Page: FC<PageProps> = ({ className, children, callback, disableScroll = false }: PageProps) => {

    const { pathname } = useLocation();
    const dispatch = useAppDispatch();

    const scroll = useSelector(getScroll);

    const targetRef = useRef<HTMLDivElement | null>(null);

    const rootRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setTimeout(() => {
            rootRef.current.scrollTop = scroll?.[pathname];
        }, 1000);// eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useInfiniteScroll({
        root: rootRef,
        target: targetRef,
        callback
    });

    const onScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
        dispatch(setScrollPosition({ value: (e.target as HTMLElement).scrollTop , pathname }));
    }, [dispatch, pathname])

    const onScrollThrottle = useThrottle(onScroll, 1000);

    const mods = {
        [cls.disableScroll]: disableScroll
    }

    return (
        <section ref={rootRef} onScroll={onScrollThrottle}  className={classNames(cls.page, mods, [className])}>
            { children }
            <div ref={targetRef} style={{ height: '2px' }} className='target'></div>
        </section>
    );
};
