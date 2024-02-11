import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoAddComponent } from '../todo-add/todo-add.component';
@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule,TodoItemComponent,TodoAddComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {

todos! :Todo[];
constructor(){
  if (typeof localStorage !== 'undefined') {
  const localItem=localStorage.getItem("todos")
  if(localItem==null){
    this.todos=[]
  }
  else{
    this.todos=JSON.parse(localItem)
  }
  }
  else{
    this.todos=[]
  }
}
deleteTodo(todo:Todo){
console.log("hi");
const index= this.todos.indexOf(todo);
this.todos.splice(index,1)
localStorage.setItem("todos",JSON.stringify(this.todos));
}


addTodo(todo:Todo){
console.log("hello");
this.todos.push(todo);
localStorage.setItem("todos",JSON.stringify(this.todos));
}


}
