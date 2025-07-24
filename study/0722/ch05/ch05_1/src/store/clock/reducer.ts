import * as T from './types'

const initialState: T.State = new Date().toISOString()

export const reducer = (state: T.State = initialState, action: T.Actions) => {
    switch (action.type) {
    return action.payload;
 }
 return state;
}
