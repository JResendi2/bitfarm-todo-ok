import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NewitemComponent } from "./newitem/newitem.component";
import { ItemsComponent } from "./items/items.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NewitemComponent, ItemsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'ToDo';
}
