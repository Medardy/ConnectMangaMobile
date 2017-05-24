import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Calendrier } from './calendrier';

@NgModule({
  declarations: [
    Calendrier,
  ],
  imports: [
    IonicPageModule.forChild(Calendrier),
  ],
  exports: [
    Calendrier
  ]
})
export class CalendrierModule {}
