import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CalendarServiceProvider} from '../../providers/calendar-service/calendar-service';
/**
 * Generated class for the Dashboard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-calendrier',
  templateUrl: 'calendrier.html',
  providers: [CalendarServiceProvider]
})
export class Calendrier {
  public list: any;

  constructor(public CalendarServiceProvider: CalendarServiceProvider){
    this.getall();
  }
 getall() {
 this.CalendarServiceProvider.getcalendar();
}
 // loadlist(){
 //   this.CalendarServiceProvider.load()
 //   .then(data => {
//      this.list = data;
//    });
 // }
}
