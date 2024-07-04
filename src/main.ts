import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { reducers, metaReducers } from './app/store/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';


bootstrapApplication(AppComponent, {
  providers: [
    provideStore(reducers),
    provideStoreDevtools({
      maxAge: 25, // Retains the last 25 states
      logOnly: false, // Set to true to enable Redux DevTools in read-only mode
    }),
  ],
})
  .catch(err => console.error(err));
