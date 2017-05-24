import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Collection } from './collection';

@NgModule({
  declarations: [
    Collection,
  ],
  imports: [
    IonicPageModule.forChild(Collection),
  ],
  exports: [
    Collection
  ]
})
export class CollectionModule {}
