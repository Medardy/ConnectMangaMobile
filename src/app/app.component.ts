import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';

import { UserLogin } from '../pages/user-login/user-login';
import { Dashboard } from '../pages/dashboard/dashboard';
import { Calendrier } from '../pages/calendrier/calendrier';
import { Collection } from '../pages/collection/collection';
import { Profil } from '../pages/profil/profil';
import { Suivi } from '../pages/suivi/suivi';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = UserLogin;
  pages: Array<{title: string,icon:string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Home',icon:'home', component: Dashboard },
      { title: 'Profil', icon: 'contact', component: Profil },
      { title: 'Collection', icon: 'images', component: Collection },
      { title: 'Calendrier', icon: 'md-calendar', component: Calendrier  },
      { title: 'Suivi', icon: 'ionitron', component: Suivi },
      { title: 'Déconnexion',icon:'lock', component: UserLogin }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
