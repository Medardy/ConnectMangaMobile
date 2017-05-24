import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '/Users/Redjohn/Documents/MOBILE/git/ConnectMangasApp/ConnectMobile/src/models/user';
import { UserServiceProvider } from '/Users/Redjohn/Documents/MOBILE/git/ConnectMangasApp/ConnectMobile/src/providers/user-service/user-service';

/**
 * Generated class for the Dashboard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class Profil {
users: User[]
  constructor(public navCtrl: NavController, public navParams: NavParams, private UserServiceProvider: UserServiceProvider ) {
    UserServiceProvider.load().subscribe(users => {console.log(users)})
  }

}
