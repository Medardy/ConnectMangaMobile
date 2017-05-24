import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { UserLogin } from '../pages/user-login/user-login';
import { UserSignup } from '../pages/user-signup/user-signup';
import { UserForgotpassword } from '../pages/user-forgotpassword/user-forgotpassword';
import { Dashboard } from '../pages/dashboard/dashboard';
import { Calendrier } from '../pages/calendrier/calendrier';
import { Collection } from '../pages/collection/collection';
import { Profil } from '../pages/profil/profil';
import { Suivi } from '../pages/suivi/suivi';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserServiceProvider } from '../providers/user-service/user-service';



@NgModule({
  declarations: [
    MyApp,

    UserLogin,
    UserSignup,
    UserForgotpassword,
    Dashboard,
    Calendrier,
    Collection,
    Profil,
    Suivi,
    

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    UserLogin,
    UserSignup,
    UserForgotpassword,
    Dashboard,
    Calendrier,
    Collection,
    Profil,
    Suivi,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
 
  ]
})
export class AppModule {}
