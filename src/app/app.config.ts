import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {provideStore} from "@ngrx/store";
import {provideStoreDevtools} from "@ngrx/store-devtools";
import {counterReducers} from "./store/counter/counter.reducers";
import {provideEffects} from "@ngrx/effects";
import {CounterEffects} from "./store/counter/counter.effects";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideStore({
      counter: counterReducers,
    }),
    provideEffects([
      CounterEffects
    ]),
    provideStoreDevtools(),
  ]
};
