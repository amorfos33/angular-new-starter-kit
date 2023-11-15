import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {environment} from "../../../environments/environment";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  protected readonly environment = environment;
  title = environment.appName;
}
