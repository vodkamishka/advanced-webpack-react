import React, { FC } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = React.lazy(() => import('./LoginForm') as
    Promise<{ default: FC<LoginFormProps> }>);