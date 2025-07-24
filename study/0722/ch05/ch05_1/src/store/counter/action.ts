import type * as T from './types';

export const setCounter = (payload: T.State): T.SetCounterAction => ({
    type: '@counter/setCounter',
    payload
});

export const increaseCounter = () => SetCounter(1)
export const decreaseCounter = () => SetCounter(-1)