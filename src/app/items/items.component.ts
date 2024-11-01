import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { AsyncPipe, NgClass, NgForOf, NgIf } from '@angular/common';
import { NewitemComponent } from "../newitem/newitem.component";
import { TodoService } from '../services/todo.service';
import { RouterLink, RouterOutlet } from '@angular/router';

interface Todo {
  id: string;
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [
    NgForOf,
    NewitemComponent,
    RouterLink,
    RouterOutlet
],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})

// export class ItemsComponent implements OnInit{
  export class ItemsComponent{
  constructor(private service: TodoService) {}

  /*
  ngOnInit(): void {
    this.todos = this.service.getTodo();
  }
  */

  get todos(){
    return this.service.getTodo();
  }

  addTodo(task:string){
    if(task.trim()){
      this.service.addTodo(task);
    }
  }

  deleteTodo(id:string) {
    const i:number = this.todos.findIndex((task)=>{
      return task.id === id;
    });
    this.service.deleteTodo(i);
  }

  deleteAll() {
    this.service.deleteAll();
  }

  completeAll() {
    this.service.completeAll();
  }

  complete(id:string){
    const i:number = this.todos.findIndex((task)=>{
      return task.id === id;
    });
    this.service.complete(i);
  }
}
