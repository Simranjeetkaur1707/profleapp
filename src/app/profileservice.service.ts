import { Injectable } from '@angular/core';
//import { Profilemodel } from './profilemodel';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProfileserviceService {
  [x: string]: any;

  constructor(private http: HttpClient) { }
  serverUrl: string = "https://mocki.io/v1/611a3036-4420-48a5-b8da-9b461853cdd2"

getprofile():Observable<any>{
  return this.http.get(this.serverUrl+this['ur']).pipe(catchError(this['errorHandler']));
}
}
