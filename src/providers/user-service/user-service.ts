import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { User } from '../../models/user';
import 'rxjs/add/operator/map';


/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserServiceProvider {
//ApiUrl = 'http://connectmangas.com/server/api/action/';

  constructor(public http: Http) {}

  //load all connectMangas users 
  load(): Observable<User[]> {
    let option: RequestOptions
    let myheaders = new Headers();
    myheaders.set('Client-Service','frontend-client');
    myheaders.set('Auth-Key','simplerestapi');
    myheaders.append('Content-type', 'application/json');

    option = new RequestOptions({ headers: myheaders })

    return this.http.get('https://connectmangas.com/server/api/action/profil', option)
      .map(res => <User[]>res.json());
  }

}
