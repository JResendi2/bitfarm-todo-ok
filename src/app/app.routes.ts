import { TodoPageComponent } from './page/todo-page/todo-page.component';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { DetailsComponent } from './page/todo-details/details/details.component';

export const routes: Routes = [
  { path: 'todo', component: TodoPageComponent,
    children: [
      {
        path: 'details/:id', // child route path
        component: DetailsComponent, // child route component that the router renders
      },
    ],
  },
  { path: '',   redirectTo: '/todo', pathMatch: 'full' },
];


