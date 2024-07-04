import { createReducer, on } from '@ngrx/store';
import { increment, decrement } from './counter.actions';
import { initialCounterState, CounterState } from './app.state';

export const counterReducer = createReducer(
  initialCounterState,
  on(increment, (state) => ({ ...state, count: state.count + 1 })),
  on(decrement, (state) => ({ ...state, count: state.count - 1 }))
);
