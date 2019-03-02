import { Component } from '@angular/core';
import { Navigation } from '@angular/router';
import { NavController }from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl:NavController){};
  imagen: string = '../assets/img/luffy-poster.jpeg';

  producto(){
  this.navCtrl.navigateRoot('/producto');
 }
 barco(){
  this.navCtrl.navigateRoot('/barco');
 }
}
