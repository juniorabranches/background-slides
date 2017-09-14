import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  backgrounds = [
    'assets/img/background/background-1.jpg',
    'assets/img/background/background-2.jpg',
    'assets/img/background/background-3.jpg',
    'assets/img/background/background-4.jpg'
  ];


  constructor(public navCtrl: NavController) {

  }

  login() {

  }

  facebookLogin() {

  }

  goToHome() {

  }

  goToSignup() {

  }


}
