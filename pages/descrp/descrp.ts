import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { LaunchNavigator } from '@ionic-native/launch-navigator';


@Component({
  selector: 'page-descrp',
  templateUrl: 'descrp.html',
})
export class DescrpPage {

	info:any = {};
  infu:any;
  dia2:any;
  constructor(public navCtrl: NavController, private navParams: NavParams, 
  		      private toastCtrl: ToastController, private callSvc: CallNumber,
            private launchNavigator: LaunchNavigator) {
  	this.info = this.navParams.get("restaurante");
    this.dia2 = this.navParams.get("Semana");
    
    this.ObtenerPromo();
  }


call(tel:string){
this.callSvc.callNumber(tel,true).then(()=> {

}).catch((err)=>  {
    alert(JSON.stringify(err))
});

}

  presentToastFB(mensaje:string) {
  let toast = this.toastCtrl.create({
    message: mensaje,
    duration: 1500,
    position: 'middle'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}

  presentToastInsta(mensaje:string) {
  let toast = this.toastCtrl.create({
    message: mensaje,
    duration: 1500,
    position: 'middle'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}

  presentToastPage(mensaje:string) {
  let toast = this.toastCtrl.create({
    message: mensaje,
    duration: 1500,
    position: 'middle'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}

  presentToastTW(mensaje:string) {
  let toast = this.toastCtrl.create({
    message: mensaje,
    duration: 1500,
    position: 'middle'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}

navme(direccion){
  this.launchNavigator.navigate(direccion);
}

obtenerDia(){
    let Wday: string[] = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    let day = new Date();

    this.dia2 = Wday[day.getDay()];
    //console.log(this.diaSemana);
  }


  ObtenerPromo(){

     switch (this.dia2) {
       case "Lunes":
             if (this.info.AcercaL == null) 
            {
              this.infu = this.info.Acerca;
            }else{
              this.infu = this.info.AcercaL;
            }
                break;
            case "Martes":
              if (this.info.AcercaM == null) 
            {
              this.infu = this.info.Acerca;
            }else{
              this.infu = this.info.AcercaM;
            }
                break;
            case "Miércoles":
              if (this.info.AcercaMier == null) 
            {
              this.infu = this.info.Acerca;
            }else{
              this.infu = this.info.AcercaMier;
            }
                break;
            case "Jueves":
              if (this.info.AcercaJ == null) 
            {
              this.infu = this.info.Acerca;
            }else{
              this.infu = this.info.AcercaJ;
            }
                break;
            case "Viernes":
              if (this.info.AcercaV == null) 
            {
              this.infu = this.info.Acerca;
            }else{
              this.infu = this.info.AcercaV;
            }
                break;
            case "Sábado":
            if (this.info.AcercaS == null) 
            {
              this.infu = this.info.Acerca;
            }else{
              this.infu = this.info.AcercaS;
            }
                break;
            case "Domingo":
              if (this.info.AcercaD == null) 
            {
              this.infu = this.info.Acerca;
            }else{
              this.infu = this.info.AcercaD;
            }
                break;
            default:
            this.obtenerDia();
            this.ObtenerPromo();
            break;
            
  }
console.log(this.infu);
}

}



