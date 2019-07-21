import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import {DescrpPage} from '../descrp/descrp';
import {LunesPage} from '../lunes/lunes';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'page-calendario',
  templateUrl: 'calendario.html'
})
export class CalendarioPage {
  trues: any = [];
items :any = [];
 diaSemana:any;
 

 constructor(public navCtrl: NavController,public afDB: AngularFireDatabase) {

	this.initializeItems();
	 afDB.list('Restaurantes').valueChanges().subscribe((variable:any)=>{
      this.items = variable;
      this.Truse();
  }) 
   }


   initializeItems() {
  }

  @ViewChild(Slides) slides: Slides;

Truse(){
   // console.log(this.diaSemana);
    let ds = "Comida";
    for (let i = 0; i < this.items.length; i++) {
      //if(this.items[i].toString(ds){
      if(this.items[i][ds]){

        this.trues.push(this.items[i]);
      }
      
    };
    console.log(this.trues);
  }





  obtenerDia(){
  	let Wday: string[] = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    let day = new Date();

    this.diaSemana = Wday[day.getDay()];
  }

  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  goLunes(dia:any, tipo:any){
   this.navCtrl.push(LunesPage,{'dia' : dia , 'tipo' : tipo });
  }

  goDescrp(index:any){
    
  this.navCtrl.push(DescrpPage,{'restaurante' : index });
   
  }

 
}


