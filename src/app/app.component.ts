import {
  Component,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  inject,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement } from './store/counter.actions';

import React from 'react';
import ReactCounter from './react-components/ReactCounter';
import { createRoot } from 'react-dom/client';
import { CommonModule } from '@angular/common';
import { STORE_TOKEN } from './store/store.token';
import { AppState } from './store/app.state';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center; background-color: green; padding: 1rem">
      <h1>Angular + React + Redux</h1>
      <div #reactContainer style="padding: 1rem"></div>

      <button (click)="increment()" style="padding: 1rem; margin-left: 10px">
        Increment by angular
      </button>
      <button (click)="decrement()" style="padding: 1rem; margin-left: 10px">
        Decrement by angular
      </button>
    </div>
  `,
  styles: [],
  imports: [CommonModule],
  standalone: true,
  providers: [{ provide: STORE_TOKEN, useExisting: Store }],
})
export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild('reactContainer', { static: true })
  reactContainer!: ElementRef<HTMLDivElement>;

  private store = inject(STORE_TOKEN) as Store<AppState>;

  constructor() {}

  ngAfterViewInit(): void {
    (window as any).ngrxStore = this.store;
    this.renderReactComponent();
  }

  ngOnDestroy(): void {
    const root = createRoot(this.reactContainer.nativeElement);
    root.unmount();
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  private renderReactComponent(): void {
    const root = createRoot(this.reactContainer.nativeElement);
    root.render(React.createElement(ReactCounter, {}));
  }
}
