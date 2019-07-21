import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, private iab: InAppBrowser) {

   
  }

    ModalAviso(){
    this.iab.create('https://drive.google.com/open?id=1nQtm_uCG3rmt1uHsZcrqc2zbQ-xHVhzA');
    }

    ModalTerminos(){
    this.iab.create('https://drive.google.com/open?id=1-4_sT6ea0znQH-TpgBwDkxL5n-Tht6yn');
    }

    Pagina(){
     this.iab.create(' https://sonpromocion.wixsite.com/sonpromocion');
    }


}
