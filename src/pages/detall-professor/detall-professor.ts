import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetallProfessorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detall-professor',
  templateUrl: 'detall-professor.html',
})
export class DetallProfessorPage {

  detallProfessor: any;

  constructor( public navParams: NavParams) {
    this.detallProfessor = navParams.get('detallProfessor');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallProfessorPage');
  }

}
