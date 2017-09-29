import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor( private _http: Http) { 
    console.log('Service instantiated!');
  }

  rootUrl = 'https://jsonplaceholder.typicode.com';  

  getAPIResults(endpoint): Observable<any[]>{
      return this._http.get(this.rootUrl + endpoint)
        .map(res => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
