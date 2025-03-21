import { StateSchema } from '@/app/providers/StoreProvider';

export const getAddCommentFormText = (
    state: Pick<StateSchema, 'addCommentForm'>,
) => state.addCommentForm?.text;

export const getAddCommentFormError = (
    state: Pick<StateSchema, 'addCommentForm'>,
) => state.addCommentForm?.error;
