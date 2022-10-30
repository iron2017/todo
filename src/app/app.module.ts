import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { SearchPipe } from 'src/app/pipes/search.pipe';
import { AppRoutingModule } from './app-routing.module';
import { TodoComponent } from './todo/todo.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoFrontComponent } from './todo-front/todo-front.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    TodoComponent,
    TodoFrontComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgScrollbarModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  

})
export class AppModule { }
