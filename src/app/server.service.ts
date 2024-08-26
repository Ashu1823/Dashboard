import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  public url="/assets/details.json"
  constructor(private http: HttpClient) { }
  getCompany(): Observable<any>{
    return this.http.get(this.url);
  }
}
