import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

interface Todo {
  id: string;
  task: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  private todos: Todo[] = [
    {id: uuid(), task:'Tarea 1', completed: false},
    {id: uuid(), task:'Tarea 2', completed: false},
  ];

  constructor() { }

  getTodo() {
    return this.todos;
  }

  getOne(i:number) {
    return this.todos[i];
  }

  addTodo(task:string){
    this.todos.push({id: uuid(), task: task, completed: false});
  }

  deleteTodo(i:number) {
    this.todos.splice(i, 1);
  }

  deleteAll() {
    this.todos = [];
  }

  completeAll() {
    this.todos.forEach((task)=>{
      task.completed = true;
    });
  }

  complete(i:number){
    this.todos[i].completed = !this.todos[i].completed;
  }

}
