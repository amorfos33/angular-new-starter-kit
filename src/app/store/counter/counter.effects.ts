import {Actions, createEffect, ofType} from "@ngrx/effects";
import {decrement, increment, init, set} from "./counter.actions";
import {switchMap, tap, withLatestFrom, of} from "rxjs";
import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {selectCount} from "./counter.selectors";

@Injectable()
export class CounterEffects {

  saveCounter = createEffect(
    ()=> this.actions$.pipe(
      ofType(increment, decrement),
      withLatestFrom(this.store.select(selectCount)),
      tap(([action, counter]) => {
        console.log(action);
        localStorage.setItem('count', counter.toString())
      })
    ),
    //if we don't need to dispatch a new effect
    {dispatch: false}
  );

  loadCount = createEffect(
    () => this.actions$.pipe(
      ofType(init),
      switchMap(() => {
        // Check if localStorage is available
        if (typeof localStorage !== 'undefined') {
          const storedCounter = localStorage.getItem('count');
          if (storedCounter) {
            return of(set({ value: +storedCounter }));
          }
        }

        return of(set({ value: 0 }));
      })
    )
  );

  constructor(private actions$: Actions,
              private store: Store<{counter: number}>) {}
}
