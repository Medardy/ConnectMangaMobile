import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CalendarServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
let apiUrl = 'http://localhost:8888/server/api/action/'

@Injectable()
export class CalendarServiceProvider {
  data: any;
  constructor(public http: Http) {
    console.log('Hello CalendarServiceProvider Provider');
  } 

  
getcalendar(){
 let headers = new Headers();
 headers.append('Content-Type', 'application/json');
 headers.append('Client-Service', 'frontend-client');
 headers.append('Auth-Key', 'simplerestapi');
 this.http.get(apiUrl+'calendar', {headers: headers}).map(res => {
 console.log(res.headers);}).subscribe(data=>{
 console.log(data);
});
}


//  load() {
//  if (this.data) {
    // already loaded data
  //  return Promise.resolve(this.data);
 // }
  // don't have the data yet
 // return new Promise(resolve => {
    // We're using Angular HTTP provider to request the data,
    // then on the response, it'll map the JSON data to a parsed JS object.
    // Next, we process the data and resolve the promise with the new data.
    
  // console.log(this.http.get(apiUrl+'calendar?type=animes', {headers: headers}));
   // .subscribe(data => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
 //      this.data = data;
//      resolve(this.data);
   //  },
    //  (err) => {
     //     console.log("Oops!");
	      //	console.log(err);
	    //  });
 // }
 // );
// }

}