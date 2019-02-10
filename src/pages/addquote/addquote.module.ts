import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddquotePage } from './addquote';

@NgModule({
  declarations: [
    AddquotePage,
  ],
  imports: [
    IonicPageModule.forChild(AddquotePage),
  ],
})
export class AddquotePageModule {}
