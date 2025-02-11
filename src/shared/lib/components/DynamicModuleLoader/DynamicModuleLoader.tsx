import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { FC, ReactNode, useEffect } from 'react';
import { store } from 'app/providers/StoreProvider/config/Store';
import { Reducer } from '@reduxjs/toolkit';
import { StateSchemaKey } from 'app/providers/StoreProvider';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DinamicModuleLoaderProps {
    asyncReducers: ReducersList;
    removeAfterUnmount?: boolean;
    children: ReactNode;
}

export const DinamicModuleLoader: FC<DinamicModuleLoaderProps> = ({ children, asyncReducers, removeAfterUnmount }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {

        Object.entries(asyncReducers).forEach(([key, reducer]: ReducersListEntry) => {
            dispatch({ type: `@INIT ${key} ${reducer}` });
            store.reducerManager.add(key as StateSchemaKey, reducer);
        })

        return () => {
            if (removeAfterUnmount) {
                Object.keys(asyncReducers).forEach((key) => {
                    store.reducerManager.remove(key as StateSchemaKey);
                    dispatch({ type: `@UNINIT ${key}` });
                });
            }
        }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [])
    
    return (
        children
    )
}