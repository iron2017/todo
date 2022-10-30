import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Items } from 'src/app/Model/items';
import { faker } from '@faker-js/faker';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  serviceURL : string ;
  serviceFilterURL:string;
  constructor(private http : HttpClient) {
    this.serviceURL = "http://localhost:3000/items"
    this.serviceFilterURL = "http://localhost:3000/items?q="
  }

  addItem(item : Items) : Observable<Items> {
    return this.http.post<Items>(this.serviceURL,item);
  }

  getAllItems(): Observable<Items[]> {
    return this.http.get<Items[]>(this.serviceURL)
  }
  filterItem(filterItem:string): Observable<Items[]>{
    return this.http.get<Items[]>(this.serviceFilterURL+filterItem);

  }
 

 
  fakeBuilder(){

  }
  private handleError(err: HttpErrorResponse): Observable<never> {
    return throwError(() => err);
  }
  
}
