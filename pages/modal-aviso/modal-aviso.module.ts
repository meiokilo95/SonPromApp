import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalAvisoPage } from './modal-aviso';

@NgModule({
  declarations: [
    ModalAvisoPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalAvisoPage),
  ],
})
export class ModalAvisoPageModule {}
