import { combineReducers } from '@reduxjs/toolkit';
import { CharactersReducer } from './characters';

export const rootReducer = combineReducers({
  character: CharactersReducer,
});
