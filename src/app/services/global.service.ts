import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Items } from 'src/app/Model/items';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  serviceURL : string ;

  constructor(private http : HttpClient) {
    this.serviceURL = "http://localhost:3000/items"
  }

  addItem(item : Items) : Observable<Items> {
    return this.http.post<Items>(this.serviceURL,item);
  }
  getAllItems(): Observable<Items[]> {
    return this.http.get<Items[]>(this.serviceURL)
  }
  filterItem(filterItem:string): Observable<Items[]>{
    return this.http.get<Items[]>(this.serviceURL+"?q="+filterItem);
  }
  private handleError(err: HttpErrorResponse): Observable<never> {
    return throwError(() => err);
  }
  
}
