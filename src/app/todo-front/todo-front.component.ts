import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-front',
  templateUrl: './todo-front.component.html',
  styleUrls: ['./todo-front.component.css']
})
export class TodoFrontComponent implements OnInit {
  newItem: string = "";
  todoItemArray:string[]=[];
  searchText:string="";

constructor(private router: Router){}
  ngOnInit(): void {
  const localdata = localStorage.getItem('todoItems');
  if (localdata != null ){
    this.todoItemArray = JSON.parse(localdata)
  }
  }
  
  addItem(){
  if (this.newItem.length > 0){
    this.todoItemArray.push(this.newItem);
                                           }
  localStorage.setItem('todoItems',JSON.stringify(this.todoItemArray))
    }  
  goToBack(){
    this.router.navigate(['/todo-list'])
  }
}
