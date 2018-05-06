import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { DetallProfessorPage } from "../detall-professor/detall-professor";
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
    coordinadors: [{nombre: string, apellido: string, genere: string}];
    professors: [{nombre: string, apellido: string, genere: string}];

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

    this.coordinadors = [
        {nombre: 'Oriol', apellido: 'Blas', genere: 'H'},
        {nombre: 'Belén', apellido: 'Fernández', genere: 'M'}
    ];

    this.professors = [
        {nombre: 'Xavi', apellido: 'Corral', genere: 'H'}
    ];

  }

  contactoClicked(professor) {
    console.log(professor);
    this.navCtrl.push(DetallProfessorPage, {detallProfessor: professor})
      /*let toast = this.toastCtrl.create({
          message: 'Has clicat al professor: ' + professor.nombre,
          position : 'middle',
          duration: 5000,
          showCloseButton: true
      });
      toast.present();
      */
  }

}
