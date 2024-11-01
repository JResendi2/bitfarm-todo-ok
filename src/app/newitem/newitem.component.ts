import { Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-newitem',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './newitem.component.html',
  styleUrl: './newitem.component.css'
})
export class NewitemComponent {
  @Output() messageEvent = new EventEmitter<string>();

  newTask:string = ''; // está a la escucha del input del html

  addTodo() { // se ejecuta cuando se presiona el botón "Agregar"
    this.messageEvent.emit(this.newTask);
    this.newTask = "";
  }
}
