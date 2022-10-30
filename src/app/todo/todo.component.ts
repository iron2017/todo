import { Component, OnInit } from '@angular/core';
import { Items } from 'src//app/Model/items';
import { GlobalService } from '../services/global.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  itemObj : Items = new Items();
  errorMessage:string = "";
  itemArr : Items[] = [];
  newItem:string="";

  addItemValue : string = '';
 

  constructor(private globalService : GlobalService) { }

  ngOnInit(): void {
    this.addItemValue = '';
    this.itemObj = new Items();
    this.itemArr = [];
    this.getAllItem();
    
  }
  getAllItem() {
    this.globalService.getAllItems().subscribe(
      {next:
      res => {
                   this.itemArr =res;
                                       },
    error: err => this.errorMessage = err.message }
    )
  }
  addItem() {
    this.itemObj.item_name = this.addItemValue;
    this.globalService.addItem(this.itemObj).subscribe({next:
      res => {
                console.log(res)
                this.ngOnInit();
                this.addItemValue = '';
                                         },
    error: err => this.errorMessage = err.message}
                                                       )
  }
 filterItem(){
  this.globalService.filterItem(this.newItem).subscribe({next:
    res => {
             this.itemArr =res;
                                 },
  error: err => this.errorMessage = err.message } );
  
 }

}
