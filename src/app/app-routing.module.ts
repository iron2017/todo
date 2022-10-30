import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoFrontComponent } from './todo-front/todo-front.component';


const root:Routes = [
  {path: '', component: TodoFrontComponent},
  {path: 'todo-list', component: TodoComponent},
  
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(root,{ enableTracing: true }),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
