import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import {DescrpPage} from '../descrp/descrp';
import { AngularFireDatabase } from '@angular/fire/database';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
   
	
  trues: any = [];
	diaSemana:any;
  items :any = [];

  constructor(public navCtrl: NavController,public afDB: AngularFireDatabase) {
	this.initializeItems();
	this.obtenerDia();

	afDB.list('Restaurantes').valueChanges().subscribe((variable:any)=>{
      this.items = variable;
      this.Truse();
  })
  
 
  }
    @ViewChild(Slides) slides: Slides;

 goToSlide() {
    this.slides.slideTo(6, 500);
  }


  
  initializeItems() {

 
  }



  ionViewDidLoad() {
  }


  Truse(){
   // console.log(this.diaSemana);
    let ds = this.diaSemana;
    for (let i = 0; i < this.items.length; i++) {
      //if(this.items[i].toString(ds){
      if(this.items[i][ds]){

        this.trues.push(this.items[i]);
      }
      
    };
    console.log(this.trues);
  }





  goDescrp(index:any){


  this.navCtrl.push(DescrpPage,{'restaurante' : index });
   
  }


  obtenerDia(){
  	let Wday: string[] = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    let day = new Date();

    this.diaSemana = Wday[day.getDay()];
    //console.log(this.diaSemana);
  }

}

