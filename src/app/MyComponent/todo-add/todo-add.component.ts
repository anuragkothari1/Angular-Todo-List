import { Component, Output,EventEmitter } from '@angular/core';

import { Todo } from '../../Todo';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css'
})
export class TodoAddComponent {

@Output  () todoAdd : EventEmitter<Todo> =new EventEmitter()
title !:string
desc !:string

onSubmit(){
  console.log(this.title)
  if(!this.title || !this.desc){
    alert("Enter The complete details");
  }
 else{
  const todo={
    sno:8,
    title:this.title,
    desc:this.desc,
    active:true
  }
  console.log(todo.title)
  this.todoAdd.emit(todo);
  console.log("after eMIT")
}
}
}
