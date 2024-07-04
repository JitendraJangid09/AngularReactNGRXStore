import { Store } from '@ngrx/store';
import { AppState } from './app/store/app.state';  // Adjust path as needed

declare global {
  interface Window {
    ngrxStore: Store<AppState>;
  }
}
