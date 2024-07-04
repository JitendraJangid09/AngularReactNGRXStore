import { InjectionToken } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';

export const STORE_TOKEN = new InjectionToken<Store<AppState>>('NgRxStore');
