import { Component, OnInit } from '@angular/core';
import { Navigation } from '@angular/router';
import { NavController }from '@ionic/angular';
@Component({
  selector: 'app-barco',
  templateUrl: './barco.page.html',
  styleUrls: ['./barco.page.scss'],
})
export class BarcoPage implements OnInit {

  constructor(public navCtrl:NavController){};

  ngOnInit() {
  }
  home(){
    this.navCtrl.navigateRoot('/home');
   }
}
