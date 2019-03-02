import { Component, OnInit } from '@angular/core';
import { Navigation } from '@angular/router';
import { NavController }from '@ionic/angular';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  constructor(public navCtrl:NavController){};

  ngOnInit() {
  }

  home(){
    this.navCtrl.navigateRoot('/home');
   }
}
