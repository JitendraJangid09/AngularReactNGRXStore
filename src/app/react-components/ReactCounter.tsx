import React, { useEffect, useState } from 'react';
import { Store } from '@ngrx/store';
import { AppState } from './../store/app.state';  // Adjust the path to your AppState interface
import { increment, decrement } from './../store/counter.actions';  // Adjust the path to your actions

const ReactComponent: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const store = (window as any).ngrxStore as Store<AppState>;  // Access the global store context

  useEffect(() => {
    if (!store) {
      console.error('NgRx store is not available');
      return;
    }

    // Subscribe to store changes
    const subscription = store.select('counter').subscribe(counterState => {
      setCount(counterState.count);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [store]);

  // Dispatch increment action
  const handleIncrement = () => {
    store.dispatch(increment());
  };

  // Dispatch decrement action
  const handleDecrement = () => {
    store.dispatch(decrement());
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default ReactComponent;
