import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  router: ActivatedRoute = inject(ActivatedRoute);
  routerPostId: string | null  = '';
  constructor() {
    this.routerPostId = this.router.snapshot.paramMap.get('id');
  }
}
