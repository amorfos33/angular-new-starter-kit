import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as environment from "../../../../environments/environment";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  env = environment;

}