import { ActionReducerMap } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { AppState } from './app.state';

export const reducers: ActionReducerMap<AppState> = {
  counter: counterReducer,
};

export const metaReducers = [];
