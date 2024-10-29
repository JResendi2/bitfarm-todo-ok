import { TodoPageComponent } from './page/todo-page/todo-page.component';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';

export const routes: Routes = [
  { path: 'todo', component: TodoPageComponent,
    // children: [
    //   {
    //     path: 'details', // child route path
    //     component: ChildAComponent, // child route component that the router renders
    //   },
    // ],
  },
  { path: '',   redirectTo: '/todo', pathMatch: 'full' },
];


