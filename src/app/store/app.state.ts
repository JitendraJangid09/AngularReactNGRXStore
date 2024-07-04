// Define your application's state
export interface AppState {
  counter: CounterState;
  // ...
  // ...
}

export interface CounterState {
  count: number;
  // ...
  // ...
}

// Define an initial state
export const initialCounterState: CounterState = {
  count: 0,
};
