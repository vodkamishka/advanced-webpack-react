import { StateSchema } from '@/app/providers/StoreProvider';

export const getScroll = (state: Pick<StateSchema, 'scrollPosition'>) => state.scrollPosition.scroll;