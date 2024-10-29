import { Component, EventEmitter, Output, Input} from '@angular/core';
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

  newTask:string = '';

  addTodo() {
    this.messageEvent.emit(this.newTask);
    this.newTask = "";
  }
}
