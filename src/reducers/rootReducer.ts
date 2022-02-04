import { combineReducers } from 'redux';
import {tokenReducer} from './tokenReducer'

export const rootReducer = combineReducers({
    tokenReducer
})


export type RootState = ReturnType<typeof rootReducer>