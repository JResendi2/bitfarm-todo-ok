import { NewitemComponent } from './../../newitem/newitem.component';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ItemsComponent } from '../../items/items.component';

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [CommonModule, NewitemComponent, ItemsComponent],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoPageComponent { }
