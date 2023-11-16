import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {ContactsComponent} from "./components/contacts/contacts.component";
import {NotFoundPageComponent} from "./components/not-found-page/not-found-page.component";
import {PostComponent} from "./components/post/post.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "contact",
    component: ContactsComponent
  },
  {
    path: "post/:id",
    component: PostComponent
  },
  {
    path: "**",
    component: NotFoundPageComponent
  }
];
