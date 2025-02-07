import { StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema';

export const getLoginForm = (state: Pick<StoreSchema, 'loginForm'>) => state.loginForm;