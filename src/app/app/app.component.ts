import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet} from '@angular/router';
import {NavComponent} from "../components/header/nav/nav.component";
import {environment} from "../../environments/environment";
import {Store} from "@ngrx/store";
import {init} from "../store/counter/counter.actions";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  year = new Date().getFullYear();
  protected readonly environment = environment;
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(init())
  }
}
