import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DescrpPage} from '../descrp/descrp';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'page-lunes',
  templateUrl: 'lunes.html',
})
export class LunesPage {

  dia2:any;
  items :any = [];
  trues :any = [];
  buscar: any = [];
  comida: any = [];
  tipo:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public afDB: AngularFireDatabase) {
    this.tipo = this.navParams.get('tipo');
    this.dia2 = this.navParams.get('dia');

    this.initializeItems();
    
  afDB.list('Restaurantes').valueChanges().subscribe((variable:any)=>{
      this.items = variable;
      this.Truse();
      
  })
  

  }



Truse(){
  if(this.tipo == "comida"){
    let ds = "Comida";
    for (let i = 0; i < this.items.length; i++) {
        if(this.items[i][this.dia2]){
          if (this.items[i][ds]) {
          this.trues.push(this.items[i]);
        }
    }
  }
}
    if(this.tipo == "Bebidas"){
      let ds = "Bar";
          for (let i = 0; i < this.items.length; i++) {
        if(this.items[i][this.dia2]){
          if (this.items[i][ds]) {
          this.trues.push(this.items[i]);
        }

      }
        
    }
  }

}

    

  



  ionViewDidLoad() {
    console.log('ionViewDidLoad LunesPage');

    
  }


initializeItems() {


  this.buscar = this.trues;
}

getItems(searchbar:any) {
    // Reset items back to all of the items
    this.initializeItems();
    
    // set q to the value of the searchbar
    var q = searchbar.target.value;


    // if the value is an empty string don't filter the items
    if (!q) {
      return;
    }

    this.buscar = (this.buscar || []).filter((v) => {
      if(v.Name && q) {
        if (v.Name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    })

    
}

   goDescrp(index:any,dia:any){


  this.navCtrl.push(DescrpPage,{'restaurante' : index, 'Semana' : dia });
   
  }
  

     

  }