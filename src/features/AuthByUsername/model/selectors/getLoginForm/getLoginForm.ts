import { StateSchema } from '@/app/providers/StoreProvider';

export const getLoginForm = (state: Pick<StateSchema, 'loginForm'>) => state?.loginForm;