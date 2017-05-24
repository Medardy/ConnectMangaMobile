import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Suivi } from './suivi';

@NgModule({
  declarations: [
    Suivi,
  ],
  imports: [
    IonicPageModule.forChild(Suivi),
  ],
  exports: [
    Suivi
  ]
})
export class SuiviModule {}
