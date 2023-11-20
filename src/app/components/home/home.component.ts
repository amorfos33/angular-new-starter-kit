import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {decrement, increment} from "../../store/counter/counter.actions";
import {selectCount, selectDoubleCount} from "../../store/counter/counter.selectors";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  count$: Observable<number>;
  doubleCount$: Observable<number>;
  protected readonly environment = environment;
  title = environment.appName;

  constructor(private store: Store<{ counter: number }>) {
    this.count$ = store.select(selectCount);
    this.doubleCount$ = this.store.select(selectDoubleCount);
  }

  increment() {
    this.store.dispatch(increment({value:1}))
  }

  decrement() {
    this.store.dispatch(decrement({value: 1}))
  }
}
