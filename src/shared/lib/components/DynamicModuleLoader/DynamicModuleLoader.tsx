import { FC, ReactNode, useEffect } from 'react';
import { type Reducer } from '@reduxjs/toolkit';

import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { store, StateSchemaKey } from '@/app/providers/StoreProvider';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
};

interface DynamicModuleLoaderProps {
    asyncReducers: ReducersList;
    removeAfterUnmount?: boolean;
    children: ReactNode;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({
    children,
    asyncReducers,
    removeAfterUnmount = true,
}) => {
    const dispatch = useAppDispatch();

    const reducers = store.reducerManager.getReducerMap();

    useEffect(
        () => {
            Object.entries(asyncReducers).forEach(([key, reducer]) => {
                const typedKey = key as StateSchemaKey;

                if (!reducers[typedKey]) {
                    dispatch({ type: `@INIT ${typedKey} ${reducer}` });
                    store.reducerManager?.add(key as StateSchemaKey, reducer);
                }
            });

            return () => {
                if (removeAfterUnmount) {
                    Object.keys(asyncReducers).forEach((key) => {
                        store.reducerManager?.remove(key as StateSchemaKey);
                        dispatch({ type: `@UNINIT ${key}` });
                    });
                }
            };
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [],
    );

    return children;
};
